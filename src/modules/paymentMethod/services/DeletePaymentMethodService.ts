import { inject, injectable } from 'tsyringe';
import { IPaymentMethodRepository } from '../repositories/IPaymentMethodRepository';
import { AppError } from '../../../shared/errors/AppError';

@injectable()
export class DeletePaymentMethodService {
  constructor(
    @inject('PaymentMethodRepository')
    private paymentMethodRepository: IPaymentMethodRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const payment = await this.paymentMethodRepository.findById(id);

    if (!payment) {
      throw new AppError('Payment method not found');
    }

    await this.paymentMethodRepository.delete(id);
  }
}
