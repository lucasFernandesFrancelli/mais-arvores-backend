import Joi from 'joi';

const createProductSchema = Joi.object({
  description: Joi.string().required(),
  category: Joi.object({ id: Joi.string().required() }).required(),
  price: Joi.number().required(),
});

export default createProductSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true,
});
