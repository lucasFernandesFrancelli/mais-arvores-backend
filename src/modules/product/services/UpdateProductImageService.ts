import { inject, injectable } from 'tsyringe';
import { IProductRepository } from '../repositories/IProductRepository';
import s3Storage from 'utils/s3Storage';
import { S3 } from 'aws-sdk';

@injectable()
export default class UpdateProductImageService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}

  async execute(id: string, imageName: string): Promise<void> {
    const S3Storage = new s3Storage();

    await S3Storage.saveImage(imageName);

    await this.productRepository.updateImageProduct(id, imageName);
  }
}
