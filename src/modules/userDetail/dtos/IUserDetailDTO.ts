import { IDefaultDTO } from '../../../shared/dtos/IDefaultDTO';

export interface IUserDetailDTO extends IDefaultDTO {
  firstName: string;
  lastName: string;
  registerNumber: string;
  cpf: string;
  street: string;
  neighborhood: string;
  complement: string;
  zipCode: string;
  city: string;
  state: string;
  number: number;
}
