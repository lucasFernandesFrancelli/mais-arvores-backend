// import CreateUserService from './CreateUserService';
// import { IUserRepository } from '../repositories/IUserRepository';
// import { InMemoryUserRepository } from '../repositories/in-memory/InMemoryUserRepository';
// import { IEncoderProvider } from '../../../shared/providers/EncoderProvider/IEncoderProvider';
// import { FakeEncoderProvider } from '../../../shared/providers/EncoderProvider/fakes/FakeEncoderProvider';
// import IUserDTO from '../dtos/IUserDTO';
// import { AppError } from '../../../shared/errors/AppError';
// import FindUserService from './FindUserService';
// import UpdateUserService from './UpdateUserService';
//
// describe('Update User Unit Test', () => {
//   let createUserService: CreateUserService;
//   let inMemoryUserRepository: IUserRepository;
//   let encodeProvider: IEncoderProvider;
//   let findUserService: FindUserService;
//   let updateUserService: UpdateUserService;
//
//   beforeEach(() => {
//     inMemoryUserRepository = new InMemoryUserRepository();
//     encodeProvider = new FakeEncoderProvider(8);
//     createUserService = new CreateUserService(
//       inMemoryUserRepository,
//       encodeProvider,
//     );
//     findUserService = new FindUserService(inMemoryUserRepository);
//     updateUserService = new UpdateUserService(inMemoryUserRepository);
//   });
//
//   it('Should update an existing user', async () => {
//     const user: IUserDTO = {
//       username: 'jorginho',
//       email: 'jorginho@test.com',
//       password: '123testando',
//     };
//
//     const createdUser = await createUserService.execute(user);
//
//     await updateUserService.execute(<string>createdUser.id, {
//       username: 'Jorginho',
//       email: 'jorginho@test.com',
//       password: '123testando',
//     });
//
//     const foundUser = await findUserService.execute(<string>createdUser.id);
//
//     expect(foundUser).toEqual(
//       expect.objectContaining({
//         username: 'Jorginho',
//         email: 'jorginho@test.com',
//       }),
//     );
//   });
//
//   it('should not update an non-existent user', async () => {
//     const user: IUserDTO = {
//       username: 'jorginho',
//       email: 'jorginho@test.com',
//       password: '123testando',
//     };
//
//     await expect(updateUserService.execute('id', user)).rejects.toEqual(
//       new AppError('User not found'),
//     );
//   });
// });
