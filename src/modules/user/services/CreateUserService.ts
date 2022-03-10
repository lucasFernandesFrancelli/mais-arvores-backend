import { inject, injectable } from 'tsyringe';

import IUserDTO from '../dtos/IUserDTO';
import { IUserRepository } from '../repositories/IUserRepository';
import { AppError } from '../../../shared/errors/AppError';

@injectable()
export default class CreateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(data: IUserDTO): Promise<IUserDTO> {
    const user = await this.userRepository.findByEmail(data.email);

    if (user) {
      throw new AppError('User already exists');
    }

    return this.userRepository.save(data);
  }
}
