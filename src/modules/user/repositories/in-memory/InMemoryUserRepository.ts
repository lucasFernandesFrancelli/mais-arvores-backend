import * as Console from 'console';
import { IUserRepository } from '../IUserRepository';
import IUserDTO from '../../dtos/IUserDTO';
import User from '../../infra/typeorm/entities/User';

export class InMemoryUserRepository implements IUserRepository {
  private users: IUserDTO[];

  constructor() {
    this.users = [];
  }

  async findByEmail(email: string): Promise<IUserDTO | undefined> {
    return this.users.find(user => user.email === email);
  }

  async findById(id: string): Promise<IUserDTO | undefined> {
    return this.users.find(user => user.id === id);
  }

  async findByUsername(username: string): Promise<IUserDTO | undefined> {
    return this.users.find(user => user.username === username);
  }

  async listUser(): Promise<IUserDTO[]> {
    return this.users;
  }

  async save(data: IUserDTO): Promise<IUserDTO> {
    const user = new User();
    Object.assign(user, data);
    this.users.push(user);

    return user;
  }

  async update(id: string, data: IUserDTO): Promise<void> {
    this.users = this.users.map(user => {
      if (user.id !== id) return user;
      return {
        ...data,
        id,
      };
    });
  }
}
