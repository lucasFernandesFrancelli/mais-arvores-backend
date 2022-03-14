import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateCategoryService from '../../../services/CreateCategoryService';

export default class CategoryController {
  async create(request: Request, response: Response): Promise<void> {
    const data = request.body;

    const createCategoryService = container.resolve(CreateCategoryService);

    response.status(201).json(await createCategoryService.execute(data));
  }
}
