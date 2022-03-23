import { inject, injectable } from 'tsyringe';
import { IUserDetailRepository } from '../repositories/IUserDetailRepository';
import { IUserDetailDTO } from '../dtos/IUserDetailDTO';
import { AppError } from '../../../shared/errors/AppError';

@injectable()
export class FindUserDetailService {
  constructor(
    @inject('UserDetailRepository')
    private userDetailRepository: IUserDetailRepository,
  ) {}

  async execute(id: string): Promise<IUserDetailDTO | undefined> {
    const userDetail = await this.userDetailRepository.findById(id);

    if (!userDetail) {
      throw new AppError('User not found');
    }

    return userDetail;
  }
}
