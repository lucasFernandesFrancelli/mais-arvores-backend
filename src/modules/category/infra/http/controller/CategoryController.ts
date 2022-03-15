import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateCategoryService from '../../../services/CreateCategoryService';
import { ListCategoryService } from '../../../services/ListCategoryService';
import { FindCategoryService } from '../../../services/FindCategoryService';
import { UpdateCategoryService } from '../../../services/UpdateCategoryService';
import { DeleteCategoryService } from '../../../services/DeleteCategoryService';

export default class CategoryController {
  async create(request: Request, response: Response): Promise<void> {
    const data = request.body;

    const createCategoryService = container.resolve(CreateCategoryService);

    response.status(201).json(await createCategoryService.execute(data));
  }

  async listCategory(request: Request, response: Response) {
    const listCategoryService = container.resolve(ListCategoryService);

    response.json(await listCategoryService.execute());
  }

  async findById(request: Request, response: Response): Promise<void> {
    const { id } = request.params;

    const findCategoryService = container.resolve(FindCategoryService);

    response.json(await findCategoryService.execute(String(id)));
  }

  async update(request: Request, response: Response): Promise<void> {
    const { id } = request.params;
    const data = request.body;

    const updateCategoryService = container.resolve(UpdateCategoryService);

    response.json(await updateCategoryService.execute(String(id), data));
  }

  async delete(request: Request, response: Response): Promise<void> {
    const { id } = request.params;
    const deleteCategoryService = container.resolve(DeleteCategoryService);

    response.json(await deleteCategoryService.execute(String(id)));
  }
}
