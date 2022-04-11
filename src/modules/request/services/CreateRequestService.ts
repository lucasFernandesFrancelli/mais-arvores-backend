import { inject, injectable } from 'tsyringe';
import { IRequestRepository } from '../repositories/IRequestRepository';
import { IRequestDTO } from '../dtos/IRequestDTO';

@injectable()
export class CreateRequestService {
  constructor(
    @inject('RequestRepository')
    private requestRepository: IRequestRepository,
  ) {}

  async execute(data: IRequestDTO): Promise<IRequestDTO> {
    return this.requestRepository.save(data);
  }
}
