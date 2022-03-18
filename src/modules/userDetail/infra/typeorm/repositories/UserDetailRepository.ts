import { injectable } from 'tsyringe';
import { getRepository, Repository } from 'typeorm';
import { IUserDetailDTO } from '../../../dtos/IUserDetailDTO';
import { IUserDetailRepository } from '../../../repositories/IUserDetailRepository';
import { UserDetail } from '../entities/UserDetail';

@injectable()
export class UserDetailRepository implements IUserDetailRepository {
  private repository: Repository<UserDetail>;

  constructor() {
    this.repository = getRepository(UserDetail);
  }

  save(userDetail: IUserDetailDTO): Promise<IUserDetailDTO> {
    const createdUserDetail = this.repository.create(userDetail);
    return this.repository.save(createdUserDetail);
  }
}
