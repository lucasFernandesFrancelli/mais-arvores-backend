import IUserDTO from '../dtos/IUserDTO';

export interface IUserRepository {
  findByEmail(email: string): Promise<IUserDTO | undefined>;
  save(user: IUserDTO): Promise<IUserDTO>;
}
