import CreateUserService from './CreateUserService';
import { IUserRepository } from '../repositories/IUserRepository';
import { InMemoryUserRepository } from '../repositories/in-memory/InMemoryUserRepository';
import { IEncoderProvider } from '../../../shared/providers/EncoderProvider/IEncoderProvider';
import { FakeEncoderProvider } from '../../../shared/providers/EncoderProvider/fakes/FakeEncoderProvider';
import IUserDTO from '../dtos/IUserDTO';
import { AppError } from '../../../shared/errors/AppError';
import AuthenticateUserService from './AuthenticateUserService';
import { ITokenManagerProvider } from '../../../shared/providers/TokenManagerProvider/ITokenManagerProvider';
import { FakeTokenManagerProvider } from '../../../shared/providers/TokenManagerProvider/fakes/FakeTokenManagerProvider';

// Verificar se o email do usuário existe
// Verificar se a senha é a mesma que foi passada na criação do usuário
// Verificar se gerou um token válido

describe('Authenticate User Test', () => {
  let createUserService: CreateUserService;
  let inMemoryUserRepository: IUserRepository;
  let encoderProvider: IEncoderProvider;
  let tokenManagerProvider: ITokenManagerProvider;
  let authenticateUserService: AuthenticateUserService;

  beforeEach(() => {
    inMemoryUserRepository = new InMemoryUserRepository();
    encoderProvider = new FakeEncoderProvider(8);
    tokenManagerProvider = new FakeTokenManagerProvider();
    createUserService = new CreateUserService(
      inMemoryUserRepository,
      encoderProvider,
    );
    authenticateUserService = new AuthenticateUserService(
      inMemoryUserRepository,
      encoderProvider,
      tokenManagerProvider,
    );
  });

  it('Should be able to authenticate an user', async () => {
    const user: IUserDTO = {
      username: 'jorginho',
      email: 'jorginho@test.com',
      password: '123testando',
    };

    await createUserService.execute(user);

    const authenticationData = await authenticateUserService.execute({
      email: 'jorginho@test.com',
      password: '123testando',
    });

    expect(authenticationData).toHaveProperty('token');
  });

  it('should not be able to authenticate a non-existent user', async () => {
    const user: IUserDTO = {
      username: 'jorginho',
      email: 'jorginho2@test.com',
      password: '123testando',
    };

    await expect(authenticateUserService.execute(user)).rejects.toEqual(
      new AppError('Email or password incorrect'),
    );
  });

  it('should not be able to authenticate a user with invalid password', async () => {
    const user: IUserDTO = {
      username: 'jorginho',
      email: 'jorginho2@test.com',
      password: '123testando',
    };

    await createUserService.execute(user);

    await expect(
      authenticateUserService.execute({ email: user.email, password: '123' }),
    ).rejects.toEqual(new AppError('Email or password incorrect'));
  });
});
