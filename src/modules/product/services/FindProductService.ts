import { inject, injectable } from 'tsyringe';
import { ProductRepository } from '../infra/typeorm/repositories/ProductRepository';
import IProductDTO from '../dtos/IProductDTO';
import { AppError } from '../../../shared/errors/AppError';

@injectable()
export class FindProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: ProductRepository,
  ) {}

  async execute(id: string): Promise<IProductDTO> {
    const product = await this.productRepository.findById(id);

    if (!product) {
      throw new AppError('Product not found');
    }

    return product;
  }
}
