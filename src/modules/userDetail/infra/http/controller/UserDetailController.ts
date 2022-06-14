import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserDetailService from '../../../services/CreateUserDetailService';
import { ListUserDetailService } from '../../../services/ListUserDetailService';
import { FindUserDetailService } from '../../../services/FindUserDetailService';
import { UpdateUserDetailService } from '../../../services/UpdateUserDetailService';

export default class UserDetailController {
  async create(request: Request, response: Response): Promise<void> {
    const data = request.body;

    data.user.id = request.userId;

    const createUserDetailService = container.resolve(CreateUserDetailService);

    response.status(201).json(await createUserDetailService.execute(data));
  }

  async list(request: Request, response: Response): Promise<void> {
    const listUserDetailService = container.resolve(ListUserDetailService);

    response.json(await listUserDetailService.execute());
  }

  async find(request: Request, response: Response): Promise<void> {
    const { id } = request.params;

    const findUserDetailService = container.resolve(FindUserDetailService);

    response.json(await findUserDetailService.execute(id));
  }

  async update(request: Request, response: Response): Promise<void> {
    const { id } = request.params;
    const data = request.body;

    const updateUserDetailService = container.resolve(UpdateUserDetailService);

    response.json(await updateUserDetailService.execute(id, data));
  }
}
