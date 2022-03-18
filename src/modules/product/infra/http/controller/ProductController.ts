import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateProductService from '../../../services/CreateProductService';
import { ListProductService } from '../../../services/ListProductService';
import { FindProductService } from '../../../services/FindProductService';
import { UpdateProductService } from '../../../services/UpdateProductService';
import { DeleteProductService } from '../../../services/DeleteProductService';

export default class ProductController {
  async create(request: Request, response: Response): Promise<void> {
    const data = request.body;
    data.userId = request;

    const createProductService = container.resolve(CreateProductService);

    response.status(201).json(await createProductService.execute(data));
  }

  async listProduct(request: Request, response: Response): Promise<void> {
    const listProductService = container.resolve(ListProductService);

    response.json(await listProductService.execute());
  }

  async findById(request: Request, response: Response): Promise<void> {
    const { id } = request.params;

    const findProductService = container.resolve(FindProductService);

    response.json(await findProductService.execute(String(id)));
  }

  async update(request: Request, response: Response): Promise<void> {
    const { id } = request.params;
    const data = request.body;

    const updateProductService = container.resolve(UpdateProductService);

    response.json(await updateProductService.execute(String(id), data));
  }

  async delete(request: Request, response: Response): Promise<void> {
    const { id } = request.params;

    const deleteProductService = container.resolve(DeleteProductService);

    response.json(await deleteProductService.execute(String(id)));
  }
}
