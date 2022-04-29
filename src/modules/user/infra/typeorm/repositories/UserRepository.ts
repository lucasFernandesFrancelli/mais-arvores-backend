import { injectable } from 'tsyringe';
import { Repository } from 'typeorm';
import IUserDTO from '../../../dtos/IUserDTO';
import { IUserRepository } from '../../../repositories/IUserRepository';
import User from '../entities/User';
import dataSource from '../../../../../shared/infra/typeorm';

@injectable()
export default class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = dataSource.getRepository(User);
  }

  async update(id: string, user: IUserDTO): Promise<void> {
    await this.repository.update(id, user);
  }

  save(user: IUserDTO): Promise<IUserDTO> {
    const createdUser = this.repository.create(user);
    return this.repository.save(createdUser);
  }

  findByEmail(email: string): Promise<User | null> {
    return this.repository.findOneBy({ email });
  }

  findByUsername(username: string): Promise<User | null> {
    return this.repository.findOneBy({ username });
  }

  listUser(): Promise<IUserDTO[]> {
    return this.repository.find();
  }

  findById(id: string): Promise<IUserDTO | null> {
    return this.repository.findOneBy({ id });
  }
}
