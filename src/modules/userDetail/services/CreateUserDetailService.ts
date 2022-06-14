import { inject, injectable } from 'tsyringe';
import { IUserDetailRepository } from '../repositories/IUserDetailRepository';
import { IUserDetailDTO } from '../dtos/IUserDetailDTO';
import { IUserRepository } from 'modules/user/repositories/IUserRepository';

@injectable()
export default class CreateUserDetailService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,

    @inject('UserDetailRepository')
    private userDetailRepository: IUserDetailRepository,
  ) {}

  async execute(data: IUserDetailDTO): Promise<IUserDetailDTO> {
    const userDetail = await this.userDetailRepository.save(data);

    if (userDetail && data.user.id) {
      await this.userRepository.update(data.user.id, { hasDetail: true });
    }

    return userDetail;
  }
}
