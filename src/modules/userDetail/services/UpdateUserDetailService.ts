import { inject, injectable } from 'tsyringe';
import { IUserDetailRepository } from '../repositories/IUserDetailRepository';
import { IUserDetailDTO } from '../dtos/IUserDetailDTO';
import { AppError } from '../../../shared/errors/AppError';

@injectable()
export class UpdateUserDetailService {
  constructor(
    @inject('UserDetailRepository')
    private userDetailRepository: IUserDetailRepository,
  ) {}

  async execute(id: string, data: IUserDetailDTO): Promise<void> {
    await this.validateUserDatailInformations({ ...data, id });

    await this.userDetailRepository.update(id, data);
  }

  private async validateUserDatailInformations(
    data: IUserDetailDTO,
  ): Promise<void> {
    const userDetail = await this.userDetailRepository.findById(
      String(data.id),
    );

    if (!userDetail) {
      throw new AppError('User not found');
    }

    if (data.cpf && data.cpf !== userDetail.cpf) {
      const isCpfAlreadyRegistered = await this.userDetailRepository.findByCPF(
        data.cpf,
      );

      if (isCpfAlreadyRegistered) {
        throw new AppError('CPF is already registered');
      }
    }
  }
}
