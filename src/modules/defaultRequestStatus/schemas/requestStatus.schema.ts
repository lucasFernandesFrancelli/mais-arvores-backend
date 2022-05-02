import Joi from 'joi';

const requestStatusSchema = Joi.object({
  description: Joi.string().required(),
});

export default requestStatusSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true,
});
