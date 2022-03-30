import { Router } from 'express';
import { celebrate, Segments } from 'celebrate';
import { RequestController } from '../controllers/RequestController';
import { ensureAuthenticated } from '../../../../user/middlewares/ensureAuthenticated';
import requestSchema from '../../../schemas/request.schema';
import { ensureAdmin } from '../../../../user/middlewares/ensureAdmin';

const requestRoutes = Router();

const requestController = new RequestController();

requestRoutes.post(
  '',
  celebrate({ [Segments.BODY]: requestSchema }),
  ensureAuthenticated,
  requestController.create,
);

requestRoutes.get('/user', ensureAuthenticated, requestController.listByUser);
requestRoutes.get(
  '',
  ensureAuthenticated,
  ensureAdmin,
  requestController.listAll,
);

export { requestRoutes };
