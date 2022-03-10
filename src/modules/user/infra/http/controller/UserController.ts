import { container, inject, injectable } from "tsyringe";
import CreateUserService from "../../../services/CreateUserService";
import { Request, Response } from "express";

export default class UserController {
  async create(request: Request, response: Response): Promise<void> {
    const data = request.body;

    const createUserService = container.resolve(CreateUserService);

    response.status(201).json(await createUserService.execute(data));
  }
}
