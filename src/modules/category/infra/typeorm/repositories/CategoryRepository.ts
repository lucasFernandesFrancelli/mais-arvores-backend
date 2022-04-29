import { injectable } from 'tsyringe';
import { Repository } from 'typeorm';
import { ICategoryRepository } from '../../../repositories/ICategoryRepository';
import Category from '../entities/Category';
import ICategoryDTO from '../../../dtos/ICategoryDTO';
import dataSource from '../../../../../shared/infra/typeorm';

@injectable()
export default class CategoryRepository implements ICategoryRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = dataSource.getRepository(Category);
  }

  save(category: ICategoryDTO): Promise<ICategoryDTO> {
    const createdCategory = this.repository.create(category);
    return this.repository.save(createdCategory);
  }

  findById(id: string): Promise<ICategoryDTO | undefined | null> {
    return this.repository.findOneBy({ id });
  }

  findByDescription(
    description: string,
  ): Promise<ICategoryDTO | undefined | null> {
    return this.repository.findOneBy({ description });
  }

  list(): Promise<ICategoryDTO[]> {
    return this.repository.find();
  }

  async update(id: string, category: ICategoryDTO): Promise<void> {
    await this.repository.update(id, category);
  }

  async delete(id: string): Promise<void> {
    await this.repository.softDelete(id);
  }
}
