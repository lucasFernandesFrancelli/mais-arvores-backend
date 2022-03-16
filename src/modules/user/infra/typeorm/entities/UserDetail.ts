import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { DefaultEntity } from '../../../../../shared/infra/typeorm/entities/DefaultEntity';
import { IUserDetailDTO } from '../../../dtos/IUserDetailDTO';
import User from './User';

@Entity('user_detail')
export class UserDetail extends DefaultEntity implements IUserDetailDTO {
  @OneToOne(() => User, { primary: true })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;

  @Column()
  city: string;

  @Column()
  complement: string;

  @Column()
  cpf: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  neighborhood: string;

  @Column()
  number: number;

  @Column()
  registerNumber: string;

  @Column()
  state: string;

  @Column()
  street: string;

  @Column()
  zipCode: string;
}
