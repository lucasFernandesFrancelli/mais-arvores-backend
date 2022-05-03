// import CreateUserService from './CreateUserService';
// import { IUserRepository } from '../repositories/IUserRepository';
// import { InMemoryUserRepository } from '../repositories/in-memory/InMemoryUserRepository';
// import { IEncoderProvider } from '../../../shared/providers/EncoderProvider/IEncoderProvider';
// import { FakeEncoderProvider } from '../../../shared/providers/EncoderProvider/fakes/FakeEncoderProvider';
// import IUserDTO from '../dtos/IUserDTO';
// import { AppError } from '../../../shared/errors/AppError';
//
// describe('Create User Test', () => {
//   let createUserService: CreateUserService;
//   let inMemoryUserRepository: IUserRepository;
//   let encodeProvider: IEncoderProvider;
//
//   beforeEach(() => {
//     inMemoryUserRepository = new InMemoryUserRepository();
//     encodeProvider = new FakeEncoderProvider(8);
//     createUserService = new CreateUserService(
//       inMemoryUserRepository,
//       encodeProvider,
//     );
//   });
//
//   it('should create an user', async () => {
//     const user: IUserDTO = {
//       username: 'jorginho',
//       email: 'jorginho@test.com',
//       password: '123testando',
//     };
//
//     const createdUser = await createUserService.execute(user);
//
//     expect(createdUser).toHaveProperty('id');
//     // expect(createdUser).not.toHaveProperty('password');
//   });
//   it('should not create user when username already exists', async () => {
//     const user: IUserDTO = {
//       username: 'jorginho',
//       email: 'jorginho@test.com',
//       password: '123testando',
//     };
//     const user2: IUserDTO = {
//       username: 'jorginho',
//       email: 'jorginho2@test.com',
//       password: '123testando',
//     };
//
//     await createUserService.execute(user);
//
//     await expect(createUserService.execute(user2)).rejects.toEqual(
//       new AppError('username already in use'),
//     );
//   });
//
//   it('should not create user when email already exists', async () => {
//     const user: IUserDTO = {
//       username: 'jorginho',
//       email: 'jorginho@test.com',
//       password: '123testando',
//     };
//     const user2: IUserDTO = {
//       username: 'jorginho2',
//       email: 'jorginho@test.com',
//       password: '123testando',
//     };
//
//     await createUserService.execute(user);
//
//     await expect(createUserService.execute(user2)).rejects.toEqual(
//       new AppError('email already in use'),
//     );
//   });
// });
