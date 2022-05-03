// import CreateUserService from './CreateUserService';
// import { IUserRepository } from '../repositories/IUserRepository';
// import { InMemoryUserRepository } from '../repositories/in-memory/InMemoryUserRepository';
// import { IEncoderProvider } from '../../../shared/providers/EncoderProvider/IEncoderProvider';
// import { FakeEncoderProvider } from '../../../shared/providers/EncoderProvider/fakes/FakeEncoderProvider';
// import IUserDTO from '../dtos/IUserDTO';
// import { ListUserService } from './ListUserService';
//
// describe('List User Unit Test', () => {
//   let createUserService: CreateUserService;
//   let inMemoryUserRepository: IUserRepository;
//   let encodeProvider: IEncoderProvider;
//   let listUserService: ListUserService;
//
//   beforeEach(() => {
//     inMemoryUserRepository = new InMemoryUserRepository();
//     encodeProvider = new FakeEncoderProvider(8);
//     createUserService = new CreateUserService(
//       inMemoryUserRepository,
//       encodeProvider,
//     );
//     listUserService = new ListUserService(inMemoryUserRepository);
//   });
//
//   it('Should list registered users', async () => {
//     const user: IUserDTO = {
//       username: 'jorginho',
//       email: 'jorginho@test.com',
//       password: '123testando',
//     };
//
//     await createUserService.execute(user);
//
//     const users = await listUserService.execute();
//
//     expect(users).toHaveLength(1);
//   });
//
//   it('should list users even if there is no user registered in system', async () => {
//     const users = await listUserService.execute();
//
//     expect(users).toHaveLength(0);
//   });
// });
