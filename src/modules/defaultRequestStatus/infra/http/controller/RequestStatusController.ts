import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateRequestStatusService from '../../../services/CreateRequestStatusService';
import { ListRequestStatusService } from '../../../services/ListRequestStatusService';
import { FindRequestStatusService } from '../../../services/FindRequestStatusService';
import { UpdateRequestStatusService } from '../../../services/UpdateRequestStatusService';
import { DeleteRequestStatusService } from '../../../services/DeleteRequestStatusService';

export default class RequestStatusController {
  async create(request: Request, response: Response): Promise<void> {
    const data = request.body;

    data.user = request.userId;

    const createCategoryService = container.resolve(CreateRequestStatusService);

    response.status(201).json(await createCategoryService.execute(data));
  }

  async list(request: Request, response: Response) {
    const listCategoryService = container.resolve(ListRequestStatusService);

    response.json(await listCategoryService.execute());
  }

  async findById(request: Request, response: Response): Promise<void> {
    const { id } = request.params;

    const findCategoryService = container.resolve(FindRequestStatusService);

    response.json(await findCategoryService.execute(String(id)));
  }

  async update(request: Request, response: Response): Promise<void> {
    const { id } = request.params;
    const data = request.body;
    // data.user = request.token.sub.user;

    const updateCategoryService = container.resolve(UpdateRequestStatusService);

    response.json(await updateCategoryService.execute(String(id), data));
  }

  async delete(request: Request, response: Response): Promise<void> {
    const { id } = request.params;
    const deleteCategoryService = container.resolve(DeleteRequestStatusService);

    response.json(await deleteCategoryService.execute(String(id)));
  }
}
