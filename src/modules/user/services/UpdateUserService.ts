import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../shared/errors/AppError';
import IUserDTO from '../dtos/IUserDTO';
import { IUserRepository } from '../repositories/IUserRepository';

@injectable()
export default class UpdateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(id: string, user: IUserDTO): Promise<void> {
    const findUser = await this.userRepository.findById(id);

    if (!findUser) {
      throw new AppError(`User not found`);
    }

    await this.userRepository.update(id, user);
  }
}
