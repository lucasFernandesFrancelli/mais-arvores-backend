import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import createUserSchema from 'modules/user/schemas/createUser.schema';
import updateUserSchema from 'modules/user/schemas/updateUser.schema';
import UserController from '../controller/UserController';

const userRoutes = Router();

const userController = new UserController();

userRoutes.post(
  '/user',
  celebrate({ [Segments.BODY]: createUserSchema }),
  userController.create,
);

userRoutes.get('/user', userController.listUser);

userRoutes.get('/user/:id', userController.findById);

userRoutes.put(
  '/user/:id',
  celebrate({ [Segments.BODY]: updateUserSchema }),
  userController.update,
);

userRoutes.post('/login', userController.authenticate);

export { userRoutes };
