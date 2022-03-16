import { IDefaultDTO } from '../../../shared/dtos/IDefaultDTO';
import IUserDTO from '../../user/dtos/IUserDTO';

export default interface ICategoryDTO extends IDefaultDTO {
  description: string;
  user: IUserDTO;
}
