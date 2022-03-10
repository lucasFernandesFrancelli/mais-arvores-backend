import UserRepository from 'modules/user/infra/typeorm/repositories/UserRepository';
import { IUserRepository } from 'modules/user/repositories/IUserRepository';
import { container } from 'tsyringe';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
