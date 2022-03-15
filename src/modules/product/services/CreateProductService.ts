import { inject, injectable } from 'tsyringe';
import { IProductRepository } from '../repositories/IProductRepository';
import IProductDTO from '../dtos/IProductDTO';
import { AppError } from '../../../shared/errors/AppError';

@injectable()
export default class CreateProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}

  async execute(data: IProductDTO): Promise<IProductDTO> {
    const product = await this.productRepository.findByName(data.name);

    if (product) {
      throw new AppError('Product already exists');
    }

    return this.productRepository.save(data);
  }
}
