import { IDefaultDTO } from 'shared/dtos/IDefaultDTO';

export default interface IUserDTO extends IDefaultDTO {
  name: string;
  email: string;
  password: string;
  isActive?: boolean;
  admin?: boolean;
}
