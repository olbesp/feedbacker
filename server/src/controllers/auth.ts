import passport from 'passport';
import { Request, Response, NextFunction } from 'express';

export const googleAuth = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })(req, res, next);
};

export const googleAuthCallback = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  passport.authenticate('google')(req, res, next);
};
