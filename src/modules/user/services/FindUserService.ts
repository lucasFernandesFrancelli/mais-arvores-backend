import { AppError } from 'shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import IUserDTO from '../dtos/IUserDTO';
import { IUserRepository } from '../repositories/IUserRepository';

type IFindUserResponse = Omit<IUserDTO, 'password'> & {
  password?: string;
};

@injectable()
export default class FindUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(id: string): Promise<IFindUserResponse> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new AppError(`User not found`);
    }

    return { ...user, password: undefined };
  }
}
