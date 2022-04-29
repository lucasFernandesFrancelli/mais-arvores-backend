import { inject, injectable } from 'tsyringe';
import { IUserDetailRepository } from '../repositories/IUserDetailRepository';
import { IUserDetailDTO } from '../dtos/IUserDetailDTO';
import { AppError } from '../../../shared/errors/AppError';

@injectable()
export default class CreateUserDetailService {
  constructor(
    @inject('UserDetailRepository')
    private userDetailRepository: IUserDetailRepository,
  ) {}

  async execute(data: IUserDetailDTO): Promise<IUserDetailDTO> {
    await this.validateUserDatailInformations(data);

    return this.userDetailRepository.save(data);
  }

  private async validateUserDatailInformations(
    data: IUserDetailDTO,
  ): Promise<void> {
    const isCpfAlreadyRegistered = await this.userDetailRepository.findByCPF(
      data.cpf,
    );

    if (isCpfAlreadyRegistered) {
      throw new AppError('CPF is already registered');
    }
  }
}
