import Joi from 'joi';

const categorySchema = Joi.object({
  description: Joi.string().required(),
});

export default categorySchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true,
});
