import ICategoryDTO from '../dtos/ICategoryDTO';

export interface ICategoryRepository {
  findByName(name: string): Promise<ICategoryDTO | undefined>;
  save(category: ICategoryDTO): Promise<ICategoryDTO>;
  listCategory(): Promise<ICategoryDTO[]>;
  findById(id: string): Promise<ICategoryDTO | undefined>;
  update(id: string, category: ICategoryDTO): Promise<void>;
}
