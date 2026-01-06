import type { Request, Response, NextFunction } from 'express'

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error(err.stack);

  const statusCode = (err as any).statusCode || 500
  const message = err.message || 'Internal Server Error'

  // Send a constant response structure to the client
  res.status(statusCode).json({
    status: 'error',
    statusCode: statusCode,
    message: message,
  });
};
