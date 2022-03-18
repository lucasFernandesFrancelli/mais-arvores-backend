import { inject, injectable } from 'tsyringe';
import { IUserDetailRepository } from '../repositories/IUserDetailRepository';
import { IUserDetailDTO } from '../dtos/IUserDetailDTO';

@injectable()
export default class CreateUserDetailService {
  constructor(
    @inject('UserDetailRepository')
    private userDetailRepository: IUserDetailRepository,
  ) {}

  async execute(data: IUserDetailDTO): Promise<IUserDetailDTO> {
    return this.userDetailRepository.save(data);
  }
}
