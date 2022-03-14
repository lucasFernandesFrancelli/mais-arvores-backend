import { inject, injectable } from 'tsyringe';
import IUserDTO from '../dtos/IUserDTO';
import { IUserRepository } from '../repositories/IUserRepository';

type IListUserResponse = Omit<IUserDTO, 'password'> & {
  password?: string;
};

@injectable()
export class ListUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(): Promise<IListUserResponse[]> {
    const users = await this.userRepository.listUser();

    return users.map(it => {
      return {
        ...it,
        password: undefined,
      };
    });
  }
}
