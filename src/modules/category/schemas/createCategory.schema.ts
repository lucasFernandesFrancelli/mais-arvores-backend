import Joi from 'joi';

const createCategorySchema = Joi.object({
  name: Joi.string().required(),
});

export default createCategorySchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true,
});
