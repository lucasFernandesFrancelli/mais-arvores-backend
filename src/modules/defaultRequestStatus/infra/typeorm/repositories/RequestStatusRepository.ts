import { injectable } from 'tsyringe';
import { Repository } from 'typeorm';
import { IRequestStatusRepository } from '../../../repositories/IRequestStatusRepository';
import RequestStatus from '../entities/RequestStatus';
import IRequestStatusDTO from '../../../dtos/IRequestStatusDTO';
import dataSource from '../../../../../shared/infra/typeorm';

@injectable()
export default class RequestStatusRepository
  implements IRequestStatusRepository
{
  private repository: Repository<RequestStatus>;

  constructor() {
    this.repository = dataSource.getRepository(RequestStatus);
  }

  save(requestStatus: IRequestStatusDTO): Promise<IRequestStatusDTO> {
    const createdCategory = this.repository.create(requestStatus);
    return this.repository.save(createdCategory);
  }

  findById(id: string): Promise<IRequestStatusDTO | undefined | null> {
    return this.repository.findOneBy({ id });
  }

  findByDescription(
    description: string,
  ): Promise<IRequestStatusDTO | undefined | null> {
    return this.repository.findOneBy({ description });
  }

  list(): Promise<IRequestStatusDTO[]> {
    return this.repository.find();
  }

  async update(id: string, requestStatus: IRequestStatusDTO): Promise<void> {
    await this.repository.update(id, requestStatus);
  }

  async delete(id: string): Promise<void> {
    await this.repository.softDelete(id);
  }
}
