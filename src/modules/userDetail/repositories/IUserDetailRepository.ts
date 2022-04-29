import { IUserDetailDTO } from '../dtos/IUserDetailDTO';

export interface IUserDetailRepository {
  save(userDetail: IUserDetailDTO): Promise<IUserDetailDTO>;
  list(): Promise<IUserDetailDTO[]>;
  findById(id: string): Promise<IUserDetailDTO | null>;
  findByCPF(cpf: string): Promise<IUserDetailDTO | null>;
  update(id: string, userDetail: IUserDetailDTO): Promise<void>;
}
