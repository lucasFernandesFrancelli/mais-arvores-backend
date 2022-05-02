import { inject, injectable } from 'tsyringe';
import { IRequestStatusRepository } from '../repositories/IRequestStatusRepository';
import { AppError } from '../../../shared/errors/AppError';

@injectable()
export class DeleteRequestStatusService {
  constructor(
    @inject('RequestStatusRepository')
    private requestStatusRepository: IRequestStatusRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const requestStatus = await this.requestStatusRepository.findById(id);

    if (!requestStatus) {
      throw new AppError('RequestStatus not found');
    }

    await this.requestStatusRepository.delete(id);
  }
}
