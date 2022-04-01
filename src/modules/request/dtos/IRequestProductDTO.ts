import { IDefaultDTO } from '../../../shared/dtos/IDefaultDTO';
import IProductDTO from 'modules/product/dtos/IProductDTO';
import { IRequestDTO } from './IRequestDTO';

export interface IRequestProductDTO extends IDefaultDTO {
  product: IProductDTO;
  request: IRequestDTO;
  productQuantity: number;
  currentProductPrice: number;
}
