import { inject, injectable } from 'tsyringe';
import { IProductRepository } from '../repositories/IProductRepository';

@injectable()
export default class UpdateProductImageService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}

  async execute(id: string, imageUrl: string): Promise<void> {
    await this.productRepository.updateImageProduct(id, imageUrl);
  }
}
