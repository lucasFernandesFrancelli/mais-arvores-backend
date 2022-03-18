import { inject, injectable } from 'tsyringe';
import { IUserDetailRepository } from '../repositories/IUserDetailRepository';
import { IUserDetailDTO } from '../dtos/IUserDetailDTO';

@injectable()
export class ListUserDetailService {
  constructor(
    @inject('UserDetailRepository')
    private userDetailRepository: IUserDetailRepository,
  ) {}

  async execute(): Promise<IUserDetailDTO[]> {
    return this.userDetailRepository.list();
  }
}
