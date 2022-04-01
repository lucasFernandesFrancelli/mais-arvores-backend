import { inject, injectable } from 'tsyringe';
import { IProductRequestRepository } from '../repositories/IProductRequestRepository';
import { IProductRequestDTO } from '../dtos/IProductRequestDTO';

@injectable()
export class ListByRequestService {
  constructor(
    @inject('ProductRequestRepository')
    private productRequestRepository: IProductRequestRepository,
  ) {}

  async execute(requestId: string): Promise<IProductRequestDTO[]> {
    return this.productRequestRepository.listByRequestId(requestId);
  }
}
