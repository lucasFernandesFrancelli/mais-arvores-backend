import { Router } from 'express';
import { celebrate, Segments } from 'celebrate';
import { ProductRequestController } from '../controllers/ProductRequestController';
import { ensureAuthenticated } from '../../../../user/middlewares/ensureAuthenticated';
import productRequestSchema from '../../../schemas/productRequest.schema';

const productRequestRoutes = Router();

const productRequestController = new ProductRequestController();

productRequestRoutes.post(
  '',
  celebrate({ [Segments.BODY]: productRequestSchema }),
  ensureAuthenticated,
  productRequestController.create,
);

productRequestRoutes.get(
  '',
  ensureAuthenticated,
  productRequestController.listAll,
);

productRequestRoutes.get(
  '/:requestId',
  ensureAuthenticated,
  productRequestController.listByRequest,
);

export { productRequestRoutes };
