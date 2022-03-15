import { NextFunction, Request, Response } from 'express';
import UserRepository from '../infra/typeorm/repositories/UserRepository';

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { userId } = request;

  const userRepository = new UserRepository();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { admin } = await userRepository.findById(String(userId));

  if (admin) {
    return next();
  }

  return response.status(401).json({ error: 'Unauthorized' });
}
