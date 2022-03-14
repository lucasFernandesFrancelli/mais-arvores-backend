import { Router } from 'express';
import { celebrate, Segments } from 'celebrate';
import CategoryController from '../controller/CategoryController';
import createCategorySchema from '../../../schemas/createCategory.schema';
import { ensureAuthenticated } from '../../../../user/middlewares/ensureAuthenticated';

const categoryRoutes = Router();

const categoryController = new CategoryController();

categoryRoutes.post(
  '',
  celebrate({ [Segments.BODY]: createCategorySchema }),
  ensureAuthenticated,
  categoryController.create,
);

export { categoryRoutes };
