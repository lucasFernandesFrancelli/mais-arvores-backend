import Joi from 'joi';

const productRequestSchema = Joi.object({
  product: Joi.object({ id: Joi.string().required() }).required(),
  request: Joi.object({ id: Joi.string().required() }).required(),
  quantity: Joi.number().required(),
  price: Joi.number().required(),
});

export default productRequestSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true,
});
