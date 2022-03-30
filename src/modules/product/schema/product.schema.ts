import Joi from 'joi';

const productSchema = Joi.object({
  description: Joi.string().required(),
  category: Joi.object({ id: Joi.string().required() }).required(),
  image: Joi.string().required(),
  price: Joi.number().required(),
});

export default productSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true,
});
