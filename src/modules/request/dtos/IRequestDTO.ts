import { IDefaultDTO } from '../../../shared/dtos/IDefaultDTO';
import IUserDTO from '../../user/dtos/IUserDTO';
import { IPaymentMethodDTO } from '../../paymentMethod/dtos/IPaymentMethodDTO';

export interface IRequestDTO extends IDefaultDTO {
  user: IUserDTO;
  paymentMethod: IPaymentMethodDTO;
  deliveryRate: number;
  total: number;
}
