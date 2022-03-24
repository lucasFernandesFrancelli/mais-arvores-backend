import { Router } from 'express';
import { userRoutes } from 'modules/user/infra/http/routes/user.routes';
import { categoryRoutes } from '../../../../modules/category/infra/http/routes/category.routes';
import { productRoutes } from '../../../../modules/product/infra/http/routes/product.routes';
import { userDetailRoutes } from '../../../../modules/userDetail/infra/http/routes/userDetail.routes';
import { paymentMethodRoutes } from '../../../../modules/paymentMethod/infra/http/routes/paymentMethod.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/users-detail', userDetailRoutes);
routes.use('/categories', categoryRoutes);
routes.use('/products', productRoutes);
routes.use('/payment-method', paymentMethodRoutes);

export { routes };
