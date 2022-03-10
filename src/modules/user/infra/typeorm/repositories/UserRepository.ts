import { injectable } from 'tsyringe';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import IUserDTO from '../../../dtos/IUserDTO';
import { IUserRepository } from '../../../repositories/IUserRepository';
import User from '../entities/User';

@injectable()
export default class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  save(user: IUserDTO): Promise<IUserDTO> {
    const createdUser = this.repository.create(user);
    return this.repository.save(createdUser);
  }

  findByEmail(email: string): Promise<User | undefined> {
    return this.repository.findOne({ email });
  }
}
