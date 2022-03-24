import UserRepository from 'modules/user/infra/typeorm/repositories/UserRepository';
import { IUserRepository } from 'modules/user/repositories/IUserRepository';
import { IEncoderProvider } from 'shared/providers/EncoderProvider/IEncoderProvider';
import { BcryptEncoderProvider } from 'shared/providers/EncoderProvider/implementations/BcryptEncoderProvider';
import { JwtTokenManagerProvider } from 'shared/providers/TokenManagerProvider/implementations/JwtTokenManagerProvider';
import { ITokenManagerProvider } from 'shared/providers/TokenManagerProvider/ITokenManagerProvider';
import { container } from 'tsyringe';
import CategoryRepository from '../../modules/category/infra/typeorm/repositories/CategoryRepository';
import { ICategoryRepository } from '../../modules/category/repositories/ICategoryRepository';
import { IProductRepository } from '../../modules/product/repositories/IProductRepository';
import { ProductRepository } from '../../modules/product/infra/typeorm/repositories/ProductRepository';
import { IUserDetailRepository } from '../../modules/userDetail/repositories/IUserDetailRepository';
import { UserDetailRepository } from '../../modules/userDetail/infra/typeorm/repositories/UserDetailRepository';
import { IPaymentMethodRepository } from '../../modules/paymentMethod/repositories/IPaymentMethodRepository';
import { PaymentMethodRepository } from '../../modules/paymentMethod/infra/typeorm/repositories/PaymentMethodRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<ICategoryRepository>(
  'CategoryRepository',
  CategoryRepository,
);
container.registerSingleton<IProductRepository>(
  'ProductRepository',
  ProductRepository,
);

container.registerSingleton<IUserDetailRepository>(
  'UserDetailRepository',
  UserDetailRepository,
);

container.registerSingleton<IPaymentMethodRepository>(
  'PaymentMethodRepository',
  PaymentMethodRepository,
);

// Providers

container.registerInstance<IEncoderProvider>(
  'EncoderProvider',
  new BcryptEncoderProvider(8),
);

container.registerSingleton<ITokenManagerProvider>(
  'TokenManagerProvider',
  JwtTokenManagerProvider,
);
