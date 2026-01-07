import type { Request, Response, NextFunction } from 'express'

interface CustomError extends Error {
  code?: number
  keyValue?: Record<string, unknown>
  errors?: Record<string, { message: string }>
  statusCode?: number
}

export function errorHandler(
  err: CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error('Error:', err.message)

  let message = err.message || 'Internal Server Error'
  let statusCode = err.statusCode || 500

  // Mongoose: Invalid ObjectId
  if (err.name === 'CastError') {
    message = 'Invalid resource ID'
    statusCode = 400
  }

  // Mongoose: Duplicate key error
  if (err.code === 11000) {
    const fields = Object.keys(err.keyValue || {}).join(', ')
    message = `Duplicate field value: ${fields}`
    statusCode = 400
  }

  // Mongoose: Validation error
  if (err.name === 'ValidationError') {
    message = Object.values(err.errors || {})
      .map((e: any) => e.message)
      .join(', ')
    statusCode = 400
  }

  res.status(statusCode).json({
    success: false,
    error: message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  })

  _next()
}
