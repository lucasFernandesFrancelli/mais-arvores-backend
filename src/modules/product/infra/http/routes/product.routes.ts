import { Router } from 'express';
import { celebrate, Segments } from 'celebrate';
import ProductController from '../controller/ProductController';
import { ensureAdmin } from '../../../../user/middlewares/ensureAdmin';
import { ensureAuthenticated } from '../../../../user/middlewares/ensureAuthenticated';
import _multer from '../../../../../shared/infra/http/middleware/upload/image';
import productSchema from '../../../schema/createProduct.schema';

const productRoutes = Router();

const productController = new ProductController();

const multer = _multer(2048, ['jpg', 'png', 'jpeg']);

productRoutes.post(
  '',
  celebrate({ [Segments.BODY]: productSchema }),
  ensureAuthenticated,
  ensureAdmin,
  productController.create,
);

productRoutes.post(
  '/:id/images/upload',
  ensureAuthenticated,
  ensureAdmin,
  multer.single('product'),
  productController.uploadImage,
);

productRoutes.put(
  '/:id',
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
