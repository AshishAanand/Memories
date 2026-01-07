import type { Request, Response, NextFunction } from 'express'
import jwt, { JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken'
import type { AuthPayload } from '../types/auth.ts'
import { JWT_SECRET } from '../configs/env.js'

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const authHeader = req.headers.authorization

    if (!authHeader) {
      return res.status(401).json({ message: 'Authorization header missing' })
    }

    // Enforce Bearer scheme
    const [scheme, token] = authHeader.split(' ')

    if (scheme !== 'Bearer' || !token) {
      return res.status(401).json({ message: 'Invalid authorization format' })
    }

    const decoded = jwt.verify(token, JWT_SECRET!) as AuthPayload

    req.user = decoded
    
    next()
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      return res.status(401).json({ message: 'Token expired' })
    }

    if (error instanceof JsonWebTokenError) {
      return res.status(401).json({ message: 'Invalid token' })
    }

    return res.status(401).json({ message: 'Authentication failed' })
  }
}
