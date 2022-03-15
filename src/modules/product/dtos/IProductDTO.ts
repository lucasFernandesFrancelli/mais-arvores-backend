import { IDefaultDTO } from '../../../shared/dtos/IDefaultDTO';
import ICategoryDTO from '../../category/dtos/ICategoryDTO';

export default interface IProductDTO extends IDefaultDTO {
  name: string;
  price: number;
  image: string;
  category: ICategoryDTO;
}
