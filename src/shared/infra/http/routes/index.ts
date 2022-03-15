import { Router } from 'express';
import { userRoutes } from 'modules/user/infra/http/routes/user.routes';
import { categoryRoutes } from '../../../../modules/category/infra/http/routes/category.routes';
import { productRoutes } from '../../../../modules/product/infra/http/routes/product.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/categories', categoryRoutes);
routes.use('/products', productRoutes);

export { routes };
