import { Router } from 'express';
import { celebrate, Segments } from 'celebrate';
import UserDetailController from '../controller/UserDetailController';
import createUserDetailSchema from '../../../schemas/createUserDetail.schema';
import { ensureAuthenticated } from '../../../../user/middlewares/ensureAuthenticated';

const userDetailRoutes = Router();

const userDetailController = new UserDetailController();

userDetailRoutes.post(
  '',
  celebrate({ [Segments.BODY]: createUserDetailSchema }),
  ensureAuthenticated,
  userDetailController.create,
);

export { userDetailRoutes };
