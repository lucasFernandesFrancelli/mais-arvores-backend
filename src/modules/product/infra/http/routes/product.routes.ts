import { Router } from 'express';
import { celebrate, Segments } from 'celebrate';
import multer from 'multer';
import ProductController from '../controller/ProductController';
import { ensureAdmin } from '../../../../user/middlewares/ensureAdmin';
import { ensureAuthenticated } from '../../../../user/middlewares/ensureAuthenticated';
import { uploadImage } from '../../../../../shared/infra/http/middleware/upload/image';
import productSchema from '../../../schema/createProduct.schema';

const productRoutes = Router();

const productController = new ProductController();

productRoutes.post(
  '',
  celebrate({ [Segments.BODY]: productSchema }),
  ensureAuthenticated,
  ensureAdmin,
  productController.create,
);

productRoutes.post(
  '/:id/images/upload',
  multer(uploadImage.getConfig).single('product'),
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
