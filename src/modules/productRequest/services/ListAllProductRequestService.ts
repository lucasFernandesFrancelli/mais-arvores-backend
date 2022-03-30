import { inject, injectable } from 'tsyringe';
import { IProductRequestRepository } from '../repositories/IProductRequestRepository';
import { IProductRequestDTO } from '../dtos/IProductRequestDTO';

@injectable()
export class ListAllProductRequestService {
  constructor(
    @inject('ProductRequestRepository')
    private productRequestRepository: IProductRequestRepository,
  ) {}

  async execute(): Promise<IProductRequestDTO[]> {
    return this.productRequestRepository.listAll();
  }
}
