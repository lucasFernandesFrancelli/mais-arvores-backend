import { IDefaultDTO } from '../../../shared/dtos/IDefaultDTO';
import ICategoryDTO from '../../category/dtos/ICategoryDTO';
import IUserDTO from '../../user/dtos/IUserDTO';

export default interface IProductDTO extends IDefaultDTO {
  description: string;
  price: number;
  image: string;
  category: ICategoryDTO;
  user: IUserDTO;
}
