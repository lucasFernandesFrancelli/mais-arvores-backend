import UserRepository from 'modules/user/infra/typeorm/repositories/UserRepository';
import { IUserRepository } from 'modules/user/repositories/IUserRepository';
import { IEncoderProvider } from 'shared/providers/EncoderProvider/IEncoderProvider';
import { BcryptEncoderProvider } from 'shared/providers/EncoderProvider/implementations/BcryptEncoderProvider';
import { JwtTokenManagerProvider } from 'shared/providers/TokenManagerProvider/implementations/JwtTokenManagerProvider';
import { ITokenManagerProvider } from 'shared/providers/TokenManagerProvider/ITokenManagerProvider';
import { container } from 'tsyringe';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);

//Providers

container.registerInstance<IEncoderProvider>(
  'EncoderProvider',
  new BcryptEncoderProvider(8),
);

container.registerSingleton<ITokenManagerProvider>(
  'TokenManagerProvider',
  JwtTokenManagerProvider,
);
