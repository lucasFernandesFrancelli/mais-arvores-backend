import ICategoryDTO from '../dtos/ICategoryDTO';

export interface ICategoryRepository {
  findByDescription(description: string): Promise<ICategoryDTO | undefined>;
  save(category: ICategoryDTO): Promise<ICategoryDTO>;
  list(): Promise<ICategoryDTO[]>;
  findById(id: string): Promise<ICategoryDTO | undefined>;
  update(id: string, category: ICategoryDTO): Promise<void>;
  delete(id: string): Promise<void>;
}
