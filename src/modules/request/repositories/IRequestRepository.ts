import { IRequestDTO } from '../dtos/IRequestDTO';

export interface IRequestRepository {
  save(request: IRequestDTO): Promise<IRequestDTO>;
  listRequestsByUser(userId: string): Promise<IRequestDTO[]>;
  findById(id: string): Promise<IRequestDTO | undefined>;
  update(id: string, request: IRequestDTO): Promise<void>;
  delete(id: string): Promise<void>;
}
