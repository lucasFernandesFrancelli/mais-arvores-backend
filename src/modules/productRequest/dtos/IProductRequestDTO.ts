import { IDefaultDTO } from '../../../shared/dtos/IDefaultDTO';
import IProductDTO from '../../product/dtos/IProductDTO';
import { IRequestDTO } from '../../request/dtos/IRequestDTO';

export interface IProductRequestDTO extends IDefaultDTO {
  product: IProductDTO;
  request: IRequestDTO;
  quantity: number;
  price: number;
}
