import { inject, injectable } from 'tsyringe';
import { ICategoryRepository } from '../repositories/ICategoryRepository';
import ICategoryDTO from '../dtos/ICategoryDTO';

@injectable()
export class ListCategoryService {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository,
  ) {}

  async execute(): Promise<ICategoryDTO[]> {
    return this.categoryRepository.listCategory();
  }
}
