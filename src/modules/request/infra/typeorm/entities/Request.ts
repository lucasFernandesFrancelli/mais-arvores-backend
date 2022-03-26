import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { IRequestDTO } from '../../../dtos/IRequestDTO';
import { DefaultEntity } from '../../../../../shared/infra/typeorm/entities/DefaultEntity';
import User from '../../../../user/infra/typeorm/entities/User';
import { PaymentMethod } from '../../../../paymentMethod/infra/typeorm/entities/PaymentMethod';

@Entity('request')
export class Request extends DefaultEntity implements IRequestDTO {
  @PrimaryColumn({ name: 'id' })
  id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;

  @ManyToOne(() => PaymentMethod)
  @JoinColumn({ name: 'payment_method_id', referencedColumnName: 'id' })
  paymentMethod: PaymentMethod;

  @Column({ name: 'request_date' })
  date: Date;

  @Column({ name: 'delivery_rate' })
  deliveryRate: number;

  @Column()
  total: number;

  constructor() {
    super();
    if (!this.id) {
      this.id = uuid();
    }
  }
}
