// import CreateUserService from './CreateUserService';
// import { IUserRepository } from '../repositories/IUserRepository';
// import { InMemoryUserRepository } from '../repositories/in-memory/InMemoryUserRepository';
// import { IEncoderProvider } from '../../../shared/providers/EncoderProvider/IEncoderProvider';
// import { FakeEncoderProvider } from '../../../shared/providers/EncoderProvider/fakes/FakeEncoderProvider';
// import IUserDTO from '../dtos/IUserDTO';
// import { AppError } from '../../../shared/errors/AppError';
// import FindUserService from './FindUserService';
//
// describe('Find User Unit Test', () => {
//   let createUserService: CreateUserService;
//   let inMemoryUserRepository: IUserRepository;
//   let encodeProvider: IEncoderProvider;
//   let findUserService: FindUserService;
//
//   beforeEach(() => {
//     inMemoryUserRepository = new InMemoryUserRepository();
//     encodeProvider = new FakeEncoderProvider(8);
//     createUserService = new CreateUserService(
//       inMemoryUserRepository,
//       encodeProvider,
//     );
//     findUserService = new FindUserService(inMemoryUserRepository);
//   });
//
//   it('Should find an existing user', async () => {
//     const user: IUserDTO = {
//       username: 'jorginho',
//       email: 'jorginho@test.com',
//       password: '123testando',
//     };
//
//     const createdUser = await createUserService.execute(user);
//
//     const foundUser = await findUserService.execute(<string>createdUser.id);
//
//     expect(foundUser).toEqual(
//       expect.objectContaining({
//         username: 'jorginho',
//         email: 'jorginho@test.com',
//       }),
//     );
//   });
//
//   it('should not find an non-existent user', async () => {
//     await expect(findUserService.execute('id')).rejects.toEqual(
//       new AppError('User not found'),
//     );
//   });
// });
