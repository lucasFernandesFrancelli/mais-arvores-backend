import { Router } from 'express';
import { celebrate, Segments } from 'celebrate';
import updateRequestSchema from '../../../schemas/updateRequest.schema';
import { RequestController } from '../controllers/RequestController';
import { ensureAuthenticated } from '../../../../user/middlewares/ensureAuthenticated';
import createRequestSchema from '../../../schemas/createRequest.schema';
import { ensureAdmin } from '../../../../user/middlewares/ensureAdmin';

const requestRoutes = Router();

const requestController = new RequestController();

requestRoutes.post(
  '',
  celebrate({ [Segments.BODY]: createRequestSchema }),
  ensureAuthenticated,
  requestController.create,
);

requestRoutes.put(
  '/:id',
  celebrate({ [Segments.BODY]: updateRequestSchema }),
  ensureAuthenticated,
  ensureAdmin,
  requestController.update,
);

requestRoutes.get('/user', ensureAuthenticated, requestController.listByUser);
requestRoutes.get('/:id', ensureAuthenticated, requestController.find);

requestRoutes.get(
  '',
  ensureAuthenticated,
  ensureAdmin,
  requestController.listAll,
);

export { requestRoutes };
