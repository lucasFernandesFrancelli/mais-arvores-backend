import { inject, injectable } from 'tsyringe';
import { IPaymentMethodRepository } from '../repositories/IPaymentMethodRepository';
import { IPaymentMethodDTO } from '../dtos/IPaymentMethodDTO';
import { AppError } from '../../../shared/errors/AppError';

@injectable()
export class CreatePaymentMethodService {
  constructor(
    @inject('PaymentMethodRepository')
    private paymentMethodRepository: IPaymentMethodRepository,
  ) {}

  async execute(data: IPaymentMethodDTO): Promise<IPaymentMethodDTO> {
    const payment = await this.paymentMethodRepository.findByDescription(
      data.description,
    );

    if (payment) {
      throw new AppError('Payment Method already exists');
    }

    return this.paymentMethodRepository.save(data);
  }
}
