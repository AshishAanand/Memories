import type { Request, Response, NextFunction } from 'express'

export function authMiddleware(
  _req: Request,
  _res: Response,
  next: NextFunction
) {
  console.log('[Auth] Auth middleware')
  next()
}
