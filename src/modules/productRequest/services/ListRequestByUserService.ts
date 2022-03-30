import { inject, injectable } from 'tsyringe';
import { IProductRequestRepository } from '../repositories/IProductRequestRepository';
import { IProductRequestDTO } from '../dtos/IProductRequestDTO';

@injectable()
export class ListRequestByUserService {
  constructor(
    @inject('RequestRepository')
    private requestRepository: IProductRequestRepository,
  ) {}

  async execute(user: string): Promise<IProductRequestDTO[]> {
    return this.requestRepository.listRequestsByUser(user);
  }
}
