import { inject, injectable } from 'tsyringe';
import { IRequestStatusRepository } from '../repositories/IRequestStatusRepository';
import IRequestStatusDTO from '../dtos/IRequestStatusDTO';
import { AppError } from '../../../shared/errors/AppError';

@injectable()
export default class CreateRequestStatusService {
  constructor(
    @inject('RequestStatusRepository')
    private requestStatusRepository: IRequestStatusRepository,
  ) {}

  async execute(data: IRequestStatusDTO): Promise<IRequestStatusDTO> {
    const requestStatus = await this.requestStatusRepository.findByDescription(
      data.description,
    );

    if (requestStatus) {
      throw new AppError('RequestStatus already exists');
    }

    return this.requestStatusRepository.save(data);
  }
}
