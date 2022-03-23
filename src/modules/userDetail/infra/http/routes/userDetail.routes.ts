import { Router } from 'express';
import { celebrate, Segments } from 'celebrate';
import UserDetailController from '../controller/UserDetailController';
import createUserDetailSchema from '../../../schemas/userDetail.schema';
import { ensureAuthenticated } from '../../../../user/middlewares/ensureAuthenticated';

const userDetailRoutes = Router();

const userDetailController = new UserDetailController();

userDetailRoutes.post(
  '',
  celebrate({ [Segments.BODY]: createUserDetailSchema }),
  ensureAuthenticated,
  userDetailController.create,
);

userDetailRoutes.put(
  '/:id',
  celebrate({ [Segments.BODY]: createUserDetailSchema }),
  ensureAuthenticated,
  userDetailController.update,
);

userDetailRoutes.get('', ensureAuthenticated, userDetailController.list);
userDetailRoutes.get('/:id', ensureAuthenticated, userDetailController.find);

export { userDetailRoutes };
