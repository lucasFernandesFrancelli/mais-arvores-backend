import { Router } from 'express';
import { celebrate, Segments } from 'celebrate';
import CategoryController from '../controller/CategoryController';
import { ensureAuthenticated } from '../../../../user/middlewares/ensureAuthenticated';
import { ensureAdmin } from '../../../../user/middlewares/ensureAdmin';
import categorySchema from '../../../schemas/category.schema';

const categoryRoutes = Router();

const categoryController = new CategoryController();

categoryRoutes.post(
  '',
  celebrate({ [Segments.BODY]: categorySchema }),
  ensureAuthenticated,
  ensureAdmin,
  categoryController.create,
);

categoryRoutes.put(
  '/:id',
  celebrate({ [Segments.BODY]: categorySchema }),
  ensureAuthenticated,
  ensureAdmin,
  categoryController.update,
);

categoryRoutes.get('', ensureAuthenticated, categoryController.listCategory);
categoryRoutes.get('/:id', ensureAuthenticated, categoryController.findById);
categoryRoutes.delete(
  '/:id',
  ensureAuthenticated,
  ensureAdmin,
  categoryController.delete,
);

export { categoryRoutes };
