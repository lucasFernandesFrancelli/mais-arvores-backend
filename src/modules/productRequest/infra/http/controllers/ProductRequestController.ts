import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateProductRequestService } from '../../../services/CreateProductRequestService';
import { ListAllProductRequestService } from '../../../services/ListAllProductRequestService';
import { ListByRequestService } from '../../../services/ListByRequestService';

export class ProductRequestController {
  async create(request: Request, response: Response): Promise<void> {
    const data = request.body;

    const createRequestProductService = container.resolve(
      CreateProductRequestService,
    );

    response.status(201).json(await createRequestProductService.execute(data));
  }

  async listAll(request: Request, response: Response): Promise<void> {
    const listAllProductRequestService = container.resolve(
      ListAllProductRequestService,
    );

    response.json(await listAllProductRequestService.execute());
  }

  async listByRequest(request: Request, response: Response): Promise<void> {
    const { requestId } = request.params;

    const listByRequestService = container.resolve(ListByRequestService);

    response.json(await listByRequestService.execute(requestId));
  }
}
