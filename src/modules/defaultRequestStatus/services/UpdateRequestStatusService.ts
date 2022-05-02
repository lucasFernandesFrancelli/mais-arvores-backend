import { inject, injectable } from 'tsyringe';
import { IRequestStatusRepository } from '../repositories/IRequestStatusRepository';
import IRequestStatusDTO from '../dtos/IRequestStatusDTO';
import { AppError } from '../../../shared/errors/AppError';

@injectable()
export class UpdateRequestStatusService {
  constructor(
    @inject('RequestStatusRepository')
    private requestStatusRepository: IRequestStatusRepository,
  ) {}

  async execute(id: string, data: IRequestStatusDTO): Promise<void> {
    const foundCategory = await this.requestStatusRepository.findById(id);

    if (!foundCategory) {
      throw new AppError('RequestStatus not found');
    }

    await this.requestStatusRepository.update(id, data);
  }
}
