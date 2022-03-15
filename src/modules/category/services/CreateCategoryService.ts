import { inject, injectable } from 'tsyringe';
import { ICategoryRepository } from '../repositories/ICategoryRepository';
import ICategoryDTO from '../dtos/ICategoryDTO';
import { AppError } from '../../../shared/errors/AppError';

@injectable()
export default class CreateCategoryService {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository,
  ) {}

  async execute(data: ICategoryDTO): Promise<ICategoryDTO> {
    const category = await this.categoryRepository.findByName(data.name);
    console.log(category);

    if (category) {
      throw new AppError('Category already exists');
    }

    return this.categoryRepository.save(data);
  }
}
