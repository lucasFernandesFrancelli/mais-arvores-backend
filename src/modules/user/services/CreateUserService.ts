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
    const user = await this.userRepository.findByEmail(data.email);

    if (user) {
      throw new AppError('User already exists');
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
