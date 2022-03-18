import { inject, injectable } from 'tsyringe';
import { IProductRepository } from '../repositories/IProductRepository';
import { AppError } from '../../../shared/errors/AppError';

@injectable()
export class DeleteProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const product = await this.productRepository.findById(id);

    if (!product) {
      throw new AppError('Product not found');
    }

    await this.productRepository.delete(id);
  }
}
