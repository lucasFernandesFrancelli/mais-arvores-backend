import { inject, injectable } from 'tsyringe';

import { IEncoderProvider } from 'shared/providers/EncoderProvider/IEncoderProvider';
import IUserDTO from '../dtos/IUserDTO';
import { IUserRepository } from '../repositories/IUserRepository';
import { AppError } from '../../../shared/errors/AppError';

type ICreateUserResponse = Omit<IUserDTO, 'password'> & {
  password?: string;
};

@injectable()
export default class CreateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
    @inject('EncoderProvider')
    private encoderProvider: IEncoderProvider,
  ) {}

  async execute(data: IUserDTO): Promise<ICreateUserResponse> {
    const username = await this.userRepository.findByUsername(data.username);

    if (username) {
      throw new AppError('username already in use');
    }

    const user = await this.userRepository.findByEmail(data.email);

    if (user) {
      throw new AppError('email already registered');
    }

    const passwordHash = await this.encoderProvider.encode(data.password);

    const createdUser = await this.userRepository.save({
      ...data,
      password: passwordHash,
    });

    return {
      ...createdUser,
      password: undefined,
    };
  }
}
