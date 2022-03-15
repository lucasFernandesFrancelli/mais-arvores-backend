import Joi from 'joi';

const productSchema = Joi.object({
  name: Joi.string().required(),
  category: Joi.object({ id: String }).required(),
  image: Joi.string().required(),
  price: Joi.number().required(),
});

export default productSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true,
});
