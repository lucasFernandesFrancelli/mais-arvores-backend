import { inject, injectable } from 'tsyringe';
import { IProductRepository } from '../repositories/IProductRepository';

@injectable()
export default class UpdateProductImageService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}

  async execute(id: string, imageName: string): Promise<void> {
    await this.productRepository.updateImageProduct(id, imageName);
  }
}
