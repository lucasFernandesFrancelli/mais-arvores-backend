import { NextFunction, Request, Response } from 'express';
import { JwtTokenManagerProvider } from '../../../shared/providers/TokenManagerProvider/implementations/JwtTokenManagerProvider';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const tokenManagerProvider = new JwtTokenManagerProvider();

  const authToken = request.headers.authorization;

  if (!authToken) {
    response.status(401).end();
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [, token] = authToken.split(' ');

  const { sub } = (await tokenManagerProvider.verify(
    token,
    '78a63fac36fe1c6b29093ed3c70a09f7',
  )) as IPayload;

  console.log(sub);
  request.userId = sub;

  return next();
}
