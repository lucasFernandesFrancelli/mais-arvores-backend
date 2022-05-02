import { Router } from 'express';
import { celebrate, Segments } from 'celebrate';
import RequestStatusController from '../controller/RequestStatusController';
import { ensureAuthenticated } from '../../../../user/middlewares/ensureAuthenticated';
import { ensureAdmin } from '../../../../user/middlewares/ensureAdmin';
import requestStatusSchema from '../../../schemas/requestStatus.schema';

const requestStatusRoutes = Router();

const requestStatusController = new RequestStatusController();

requestStatusRoutes.post(
  '',
  celebrate({ [Segments.BODY]: requestStatusSchema }),
  ensureAuthenticated,
  ensureAdmin,
  requestStatusController.create,
);

requestStatusRoutes.put(
  '/:id',
  celebrate({ [Segments.BODY]: requestStatusSchema }),
  ensureAuthenticated,
  ensureAdmin,
  requestStatusController.update,
);

requestStatusRoutes.get('', ensureAuthenticated, requestStatusController.list);
requestStatusRoutes.get(
  '/:id',
  ensureAuthenticated,
  requestStatusController.findById,
);
requestStatusRoutes.delete(
  '/:id',
  ensureAuthenticated,
  ensureAdmin,
  requestStatusController.delete,
);

export { requestStatusRoutes };
