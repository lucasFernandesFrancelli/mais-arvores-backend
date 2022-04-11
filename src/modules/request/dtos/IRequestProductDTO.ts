import IProductDTO from 'modules/product/dtos/IProductDTO';
import { IDefaultDTO } from '../../../shared/dtos/IDefaultDTO';
import { IRequestDTO } from './IRequestDTO';

export interface IRequestProductDTO extends IDefaultDTO {
  product: IProductDTO;
  request: IRequestDTO;
  productQuantity: number;
  currentPrice: number;
}
