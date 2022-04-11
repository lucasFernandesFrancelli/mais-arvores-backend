import { inject, injectable } from 'tsyringe';
import { IPaymentMethodRepository } from '../repositories/IPaymentMethodRepository';
import { IPaymentMethodDTO } from '../dtos/IPaymentMethodDTO';
import { AppError } from '../../../shared/errors/AppError';

@injectable()
export class FindPaymentMethodService {
  constructor(
    @inject('PaymentMethodRepository')
    private paymentMethodRepository: IPaymentMethodRepository,
  ) {}

  async execute(id: string): Promise<IPaymentMethodDTO | undefined> {
    const payment = await this.paymentMethodRepository.findById(id);

    if (!payment) {
      throw new AppError('Payment method not found');
    }

    return payment;
  }
}
