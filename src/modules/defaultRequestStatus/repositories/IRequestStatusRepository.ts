import IRequestStatusDTO from '../dtos/IRequestStatusDTO';

export interface IRequestStatusRepository {
  findByDescription(
    description: string,
  ): Promise<IRequestStatusDTO | undefined | null>;
  save(requestStatus: IRequestStatusDTO): Promise<IRequestStatusDTO>;
  list(): Promise<IRequestStatusDTO[]>;
  findById(id: string): Promise<IRequestStatusDTO | undefined | null>;
  update(id: string, requestStatus: IRequestStatusDTO): Promise<void>;
  delete(id: string): Promise<void>;
}
