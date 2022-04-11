import { inject, injectable } from 'tsyringe';
import { IPaymentMethodRepository } from '../repositories/IPaymentMethodRepository';
import { IPaymentMethodDTO } from '../dtos/IPaymentMethodDTO';

@injectable()
export class ListPaymentMethodService {
  constructor(
    @inject('PaymentMethodRepository')
    private paymentMethodRepository: IPaymentMethodRepository,
  ) {}

  async execute(): Promise<IPaymentMethodDTO[]> {
    return this.paymentMethodRepository.list();
  }
}
