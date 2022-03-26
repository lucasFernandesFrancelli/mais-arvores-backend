import { Router } from 'express';
import { celebrate, Segments } from 'celebrate';
import { RequestController } from '../controllers/RequestController';
import { ensureAuthenticated } from '../../../../user/middlewares/ensureAuthenticated';
import requestSchema from '../../../schemas/request.schema';

const requestRoutes = Router();

const requestController = new RequestController();

requestRoutes.post(
  '',
  celebrate({ [Segments.BODY]: requestSchema }),
  ensureAuthenticated,
  requestController.create,
);

requestRoutes.get('', ensureAuthenticated, requestController.list);

export { requestRoutes };
