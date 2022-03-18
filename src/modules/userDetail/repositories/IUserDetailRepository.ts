import { IUserDetailDTO } from '../dtos/IUserDetailDTO';

export interface IUserDetailRepository {
  save(userDetail: IUserDetailDTO): Promise<IUserDetailDTO>;
}
