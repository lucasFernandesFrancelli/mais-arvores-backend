import { IProductRequestDTO } from '../dtos/IProductRequestDTO';

export interface IProductRequestRepository {
  save(data: IProductRequestDTO): Promise<IProductRequestDTO>;
  findById(id: string): Promise<IProductRequestDTO | undefined>;
  update(id: string, data: IProductRequestDTO): Promise<void>;
  delete(id: string): Promise<void>;
  listAll(): Promise<IProductRequestDTO[]>;
}
