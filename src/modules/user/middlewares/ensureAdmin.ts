import { NextFunction, Request, Response } from 'express';
import UserRepository from '../infra/typeorm/repositories/UserRepository';

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { userId } = request;

  const userRepository = new UserRepository();

  const user = await userRepository.findById(userId);

  if (!user) {
    return response.status(401).json({ error: 'Unauthorized' });
  }

  if (!user.isAdmin) {
    return response.status(401).json({ error: 'Unauthorized' });
  }

  return next();
}
