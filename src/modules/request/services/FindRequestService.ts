import { inject, injectable } from 'tsyringe';
import { IRequestDTO } from '../dtos/IRequestDTO';
import { IRequestRepository } from '../repositories/IRequestRepository';
import { AppError } from '../../../shared/errors/AppError';

@injectable()
export default class FindRequestService {
  constructor(
    @inject('RequestRepository')
    private requestRepository: IRequestRepository,
  ) {}

  async execute(id: string): Promise<IRequestDTO | undefined> {
    const request = await this.requestRepository.findById(id);

    if (!request) {
      throw new AppError('Request not found');
    }

    return request;
  }
}
