import IProductDTO from '../dtos/IProductDTO';

export interface IProductRepository {
  findByName(name: string): Promise<IProductDTO | undefined>;
  save(product: IProductDTO): Promise<IProductDTO>;
  listProduct(): Promise<IProductDTO[]>;
  findById(id: string): Promise<IProductDTO | undefined>;
  update(id: string, product: IProductDTO): Promise<void>;
  delete(id: string): Promise<void>;
}
