import { NextFunction, Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateProductService from '../../../services/CreateProductService';
import { ListProductService } from '../../../services/ListProductService';
import { FindProductService } from '../../../services/FindProductService';
import { UpdateProductService } from '../../../services/UpdateProductService';
import { DeleteProductService } from '../../../services/DeleteProductService';
import UpdateProductImageService from '../../../services/UpdateProductImageService';

export default class ProductController {
  async create(request: Request, response: Response): Promise<void> {
    const data = request.body;
    data.user = request.userId;

    const createProductService = container.resolve(CreateProductService);

    response.status(201).json(await createProductService.execute(data));
  }

  async uploadImage(request: Request, response: Response, next: NextFunction) {
    try {
      const requestImage = request.file as Express.MulterS3.File;

      if (!requestImage || !requestImage.location) {
        response.status(401).json({ response: `Not a valid file` });
        return;
      }

      const { id } = request.params;
      const updateProductImageService = container.resolve(
        UpdateProductImageService,
      );

      response.json(
        await updateProductImageService.execute(id, requestImage.location),
      );
    } catch (e) {
      next(e);
    }
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
