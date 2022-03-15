import { Router } from 'express';
import { celebrate, Segments } from 'celebrate';
import CategoryController from '../controller/CategoryController';
import createCategorySchema from '../../../schemas/createCategory.schema';
import { ensureAuthenticated } from '../../../../user/middlewares/ensureAuthenticated';
import { ensureAdmin } from '../../../../user/middlewares/ensureAdmin';

const categoryRoutes = Router();

const categoryController = new CategoryController();

categoryRoutes.post(
  '',
  celebrate({ [Segments.BODY]: createCategorySchema }),
  ensureAuthenticated,
  ensureAdmin,
  categoryController.create,
);

export { categoryRoutes };
