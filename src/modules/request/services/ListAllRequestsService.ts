import { inject, injectable } from 'tsyringe';
import { IRequestRepository } from '../repositories/IRequestRepository';
import { IRequestDTO } from '../dtos/IRequestDTO';

@injectable()
export class ListAllRequestsService {
  constructor(
    @inject('RequestRepository')
    private requestRepository: IRequestRepository,
  ) {}

  async execute(): Promise<IRequestDTO[]> {
    return this.requestRepository.listAllRequests();
  }
}
