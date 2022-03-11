import { inject, injectable } from 'tsyringe';
import IUserDTO from '../dtos/IUserDTO';
import { IUserRepository } from '../repositories/IUserRepository';

@injectable()
export class ListUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(): Promise<IUserDTO[]> {
    return this.userRepository.listUser();
  }
}
