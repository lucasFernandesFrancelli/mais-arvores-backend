import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateProductRequestService } from '../../../services/CreateProductRequestService';
import { ListAllProductRequestService } from '../../../services/ListAllProductRequestService';

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
}
