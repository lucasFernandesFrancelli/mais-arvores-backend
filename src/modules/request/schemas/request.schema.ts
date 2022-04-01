import Joi from 'joi';

const requestSchema = Joi.object({
  paymentMethod: Joi.object({ id: Joi.string().required() }).required(),
  deliveryRate: Joi.number().required(),
  total: Joi.number().required(),
  products: Joi.array().items(
    Joi.object({
      product: Joi.object({ id: Joi.string() }),
      productQuantity: Joi.number().positive(),
      currentProductPrice: Joi.number(),
    }),
  ),
});

export default requestSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true,
});
