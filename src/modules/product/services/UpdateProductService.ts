import { inject, injectable } from 'tsyringe';
import { IProductRepository } from '../repositories/IProductRepository';
import IProductDTO from '../dtos/IProductDTO';
import { AppError } from '../../../shared/errors/AppError';

@injectable()
export class UpdateProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}

  async execute(id: string, product: IProductDTO): Promise<void> {
    const foundProduct = await this.productRepository.findById(id);

    if (!foundProduct) {
      throw new AppError('Product not found');
    }

    await this.productRepository.update(id, product);
  }
}
