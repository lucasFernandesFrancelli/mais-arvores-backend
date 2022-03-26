import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateRequestService } from '../../../services/CreateRequestService';
import { ListRequestService } from '../../../services/ListRequestService';
import IUserDTO from '../../../../user/dtos/IUserDTO';

export class RequestController {
  async create(request: Request, response: Response): Promise<void> {
    const data = request.body;
    data.user = request.userId;

    const createRequestService = container.resolve(CreateRequestService);

    response.status(201).json(await createRequestService.execute(data));
  }

  async list(request: Request, response: Response): Promise<void> {
    const user = request.userId;

    const listRequestService = container.resolve(ListRequestService);

    response.json(await listRequestService.execute(user));
  }
}
