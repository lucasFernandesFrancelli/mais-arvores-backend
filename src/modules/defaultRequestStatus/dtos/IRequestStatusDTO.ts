import { IDefaultDTO } from '../../../shared/dtos/IDefaultDTO';
import IUserDTO from '../../user/dtos/IUserDTO';

export default interface IRequestStatusDTO extends IDefaultDTO {
  description: string;
  user: IUserDTO;
}
