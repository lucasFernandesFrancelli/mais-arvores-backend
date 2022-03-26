import Joi from 'joi';

const requestSchema = Joi.object({
  paymentMethod: Joi.object({ id: Joi.string().required() }).required(),
  deliveryRate: Joi.number().required(),
  total: Joi.number().required(),
});

export default requestSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true,
});
