import { injectable } from 'tsyringe';
import { getRepository, Repository } from 'typeorm';
import { ICategoryRepository } from '../../../repositories/ICategoryRepository';
import Category from '../entities/Category';
import ICategoryDTO from '../../../dtos/ICategoryDTO';

@injectable()
export default class CategoryRepository implements ICategoryRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  save(category: ICategoryDTO): Promise<ICategoryDTO> {
    const createdCategory = this.repository.create(category);
    return this.repository.save(createdCategory);
  }

  findById(id: string): Promise<ICategoryDTO | undefined> {
    return this.repository.findOne(id);
  }

  findByName(name: string): Promise<ICategoryDTO | undefined> {
    return this.repository.findOne({ name });
  }

  listCategory(): Promise<ICategoryDTO[]> {
    return this.repository.find();
  }

  async update(id: string, category: ICategoryDTO): Promise<void> {
    await this.repository.update(id, category);
  }
}
