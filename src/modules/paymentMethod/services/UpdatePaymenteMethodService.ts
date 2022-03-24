import { inject, injectable } from 'tsyringe';
import { IPaymentMethodRepository } from '../repositories/IPaymentMethodRepository';
import { IPaymentMethodDTO } from '../dtos/IPaymentMethodDTO';
import { AppError } from '../../../shared/errors/AppError';

@injectable()
export class UpdatePaymenteMethodService {
  constructor(
    @inject('PaymentMethodRepository')
    private paymentMethodRepository: IPaymentMethodRepository,
  ) {}

  async execute(id: string, paymentMethod: IPaymentMethodDTO): Promise<void> {
    const payment = await this.paymentMethodRepository.findById(id);

    if (!payment) {
      throw new AppError('Payment method not found');
    }
    await this.paymentMethodRepository.update(id, paymentMethod);
  }
}
