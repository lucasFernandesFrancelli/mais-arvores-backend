import { container, injectable } from 'tsyringe';
import { Request, Response } from 'express';
import { CreatePaymentMethodService } from '../../../services/CreatePaymentMethodService';
import { ListPaymentMethodService } from '../../../services/ListPaymentMethodService';
import { FindPaymentMethodService } from '../../../services/FindPaymentMethodService';
import { UpdatePaymentMethodService } from '../../../services/UpdatePaymentMethodService';
import { DeletePaymentMethodService } from '../../../services/DeletePaymentMethodService';

@injectable()
export class PaymentMethodController {
  async create(request: Request, response: Response): Promise<void> {
    const data = request.body;

    const createPaymentMethodService = container.resolve(
      CreatePaymentMethodService,
    );

    response.status(201).json(await createPaymentMethodService.execute(data));
  }

  async list(request: Request, response: Response): Promise<void> {
    const listPaymentMethodService = container.resolve(
      ListPaymentMethodService,
    );

    response.json(await listPaymentMethodService.execute());
  }

  async findById(request: Request, response: Response): Promise<void> {
    const { id } = request.params;

    const findPaymentMethodService = container.resolve(
      FindPaymentMethodService,
    );

    response.json(await findPaymentMethodService.execute(id));
  }

  async update(request: Request, response: Response): Promise<void> {
    const { id } = request.params;
    const { body } = request;

    const updatePaymentMethodService = container.resolve(
      UpdatePaymentMethodService,
    );

    response.json(await updatePaymentMethodService.execute(id, body));
  }

  async delete(request: Request, response: Response): Promise<void> {
    const { id } = request.params;

    const deletePaymentMethodService = container.resolve(
      DeletePaymentMethodService,
    );

    response.json(await deletePaymentMethodService.execute(id));
  }
}
