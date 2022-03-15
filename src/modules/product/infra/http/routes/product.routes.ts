import { Router } from 'express';
import { celebrate, Segments } from 'celebrate';
import ProductController from '../controller/ProductController';
import { ensureAdmin } from '../../../../user/middlewares/ensureAdmin';
import { ensureAuthenticated } from '../../../../user/middlewares/ensureAuthenticated';
import ProductSchema from '../../../schema/Product.schema';

const productRoutes = Router();

const productController = new ProductController();

productRoutes.post(
  '',
  celebrate({ [Segments.BODY]: ProductSchema }),
  ensureAuthenticated,
  ensureAdmin,
  productController.create,
);

productRoutes.put(
  '/:id',
  celebrate({ [Segments.BODY]: ProductSchema }),
  ensureAuthenticated,
  ensureAdmin,
  productController.update,
);

productRoutes.get('', ensureAuthenticated, productController.listProduct);
productRoutes.get('/:id', ensureAuthenticated, productController.findById);

productRoutes.delete(
  '/:id',
  ensureAuthenticated,
  ensureAdmin,
  productController.delete,
);

export { productRoutes };
