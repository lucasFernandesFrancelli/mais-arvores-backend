import IUserDTO from '../dtos/IUserDTO';

export interface IUserRepository {
  findByEmail(email: string): Promise<IUserDTO | undefined>;
  findByUsername(username: string): Promise<IUserDTO | undefined>;
  save(user: IUserDTO): Promise<IUserDTO>;
  listUser(): Promise<IUserDTO[]>;
  findById(id: string): Promise<IUserDTO | undefined>;
  update(id: string, user: IUserDTO): Promise<void>;
}
