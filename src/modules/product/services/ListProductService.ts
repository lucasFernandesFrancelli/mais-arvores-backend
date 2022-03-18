import { inject, injectable } from 'tsyringe';
import { IProductRepository } from '../repositories/IProductRepository';
import IProductDTO from '../dtos/IProductDTO';

@injectable()
export class ListProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}

  async execute(): Promise<IProductDTO[]> {
    return this.productRepository.listProduct();
  }
}
