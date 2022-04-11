import Joi from 'joi';

const paymentMethodSchema = Joi.object({
  description: Joi.string().required(),
});

export default paymentMethodSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true,
});
