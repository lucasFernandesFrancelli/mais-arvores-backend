import { inject, injectable } from 'tsyringe';
import { IRequestRepository } from '../repositories/IRequestRepository';
import { IRequestDTO } from '../dtos/IRequestDTO';

@injectable()
export class ListRequestService {
  constructor(
    @inject('RequestRepository')
    private requestRepository: IRequestRepository,
  ) {}

  async execute(user: string): Promise<IRequestDTO[]> {
    return this.requestRepository.listRequestsByUser(user);
  }
}
