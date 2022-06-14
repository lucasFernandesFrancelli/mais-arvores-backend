import Joi from 'joi';

const updateUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().optional(),
  password: Joi.string().min(8).optional(),
  hasDetail: Joi.boolean().optional(),
});

export default updateUserSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true,
});
