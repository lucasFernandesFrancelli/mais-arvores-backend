import { inject, injectable } from 'tsyringe';
import { sign } from 'jsonwebtoken';

import { IUserRepository } from '../repositories/IUserRepository';
import { AppError } from '../../../shared/errors/AppError';
import { IEncoderProvider } from '../../../shared/providers/EncoderProvider/IEncoderProvider';
import { ITokenManagerProvider } from 'shared/providers/TokenManagerProvider/ITokenManagerProvider';

interface IAuthenticateRequest {
  email: string;
  password: string;
}
@injectable()
export default class AuthenticateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
    @inject('EncoderProvider')
    private encoderProvider: IEncoderProvider,
    @inject('TokenManagerProvider')
    private tokenManagerProvider: ITokenManagerProvider,
  ) {}

  async execute(data: IAuthenticateRequest) {
    const user = await this.userRepository.findByEmail(data.email);

    if (!user) {
      throw new AppError('Email or password incorrect');
    }

    const passwordMatch = await this.encoderProvider.compare(
      data.password,
      user.password,
    );

    if (!passwordMatch) {
      throw new AppError('Email or password incorrect');
    }
    const token = this.tokenManagerProvider.sign(
      {},
      '78a63fac36fe1c6b29093ed3c70a09f7',
      {
        subject: user.id,
        expiresIn: '1d',
      },
    );

    return token;
  }
}
