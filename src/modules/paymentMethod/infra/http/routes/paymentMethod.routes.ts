import { Router } from 'express';
import { celebrate, Segments } from 'celebrate';
import { PaymentMethodController } from '../controllers/PaymentMethodController';
import paymentMethodSchema from '../../../schemas/paymentMethod.schema';
import { ensureAuthenticated } from '../../../../user/middlewares/ensureAuthenticated';
import { ensureAdmin } from '../../../../user/middlewares/ensureAdmin';

const paymentMethodRoutes = Router();

const paymentMethodController = new PaymentMethodController();

paymentMethodRoutes.post(
  '',
  celebrate({ [Segments.BODY]: paymentMethodSchema }),
  ensureAuthenticated,
  ensureAdmin,
  paymentMethodController.create,
);

paymentMethodRoutes.put(
  '/:id',
  celebrate({ [Segments.BODY]: paymentMethodSchema }),
  ensureAuthenticated,
  ensureAdmin,
  paymentMethodController.update,
);

paymentMethodRoutes.get('', ensureAuthenticated, paymentMethodController.list);
paymentMethodRoutes.delete(
  '/:id',
  ensureAuthenticated,
  ensureAdmin,
  paymentMethodController.delete,
);
paymentMethodRoutes.get(
  '/:id',
  ensureAuthenticated,
  paymentMethodController.findById,
);

export { paymentMethodRoutes };
