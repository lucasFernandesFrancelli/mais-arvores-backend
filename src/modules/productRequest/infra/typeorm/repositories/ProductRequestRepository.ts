import { injectable } from 'tsyringe';
import { getRepository, Repository } from 'typeorm';
import { IProductRequestRepository } from '../../../repositories/IProductRequestRepository';
import { ProductRequest } from '../entities/ProductRequest';
import { IProductRequestDTO } from '../../../dtos/IProductRequestDTO';

@injectable()
export class ProductRequestRepository implements IProductRequestRepository {
  private repository: Repository<ProductRequest>;

  constructor() {
    this.repository = getRepository(ProductRequest);
  }

  async delete(id: string): Promise<void> {
    await this.repository.softDelete(id);
  }

  findById(id: string): Promise<IProductRequestDTO | undefined> {
    return this.repository.findOne(id);
  }

  save(request: IProductRequestDTO): Promise<IProductRequestDTO> {
    const createdProductRequest = this.repository.create(request);
    return this.repository.save(createdProductRequest);
  }

  async update(id: string, request: IProductRequestDTO): Promise<void> {
    await this.repository.update(id, request);
  }

  listAll(): Promise<IProductRequestDTO[]> {
    return this.repository.find({ relations: ['product', 'request'] });
  }
}
