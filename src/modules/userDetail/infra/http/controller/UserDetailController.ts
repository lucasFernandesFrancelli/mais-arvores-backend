import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserDetailService from '../../../services/CreateUserDetailService';

export default class UserDetailController {
  async create(request: Request, response: Response): Promise<void> {
    const data = request.body;

    data.user = request.userId;

    const createUserDetailService = container.resolve(CreateUserDetailService);

    response.status(201).json(await createUserDetailService.execute(data));
  }
}
