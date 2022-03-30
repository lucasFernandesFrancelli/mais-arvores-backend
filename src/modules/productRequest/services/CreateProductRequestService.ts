import { inject, injectable } from 'tsyringe';
import { IProductRequestRepository } from '../repositories/IProductRequestRepository';
import { IProductRequestDTO } from '../dtos/IProductRequestDTO';

@injectable()
export class CreateProductRequestService {
  constructor(
    @inject('ProductRequestRepository')
    private productRequestRepository: IProductRequestRepository,
  ) {}

  async execute(data: IProductRequestDTO): Promise<IProductRequestDTO> {
    return this.productRequestRepository.save(data);
  }
}
