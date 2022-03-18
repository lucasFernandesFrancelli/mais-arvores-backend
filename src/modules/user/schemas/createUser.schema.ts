import Joi from 'joi';

const createUserSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

export default createUserSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true,
});
