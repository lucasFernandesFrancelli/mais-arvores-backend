import { IDefaultDTO } from 'shared/dtos/IDefaultDTO';

export default interface IUserDTO extends IDefaultDTO {
  username: string;
  email: string;
  password: string;
  isActive?: boolean;
  isAdmin?: boolean;
  hasDetail?: boolean;
}
