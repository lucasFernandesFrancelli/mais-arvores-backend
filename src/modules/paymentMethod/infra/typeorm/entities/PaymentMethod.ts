import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { DefaultEntity } from '../../../../../shared/infra/typeorm/entities/DefaultEntity';
import { IPaymentMethodDTO } from '../../../dtos/IPaymentMethodDTO';

@Entity('payment_method')
export class PaymentMethod extends DefaultEntity implements IPaymentMethodDTO {
  @PrimaryColumn({ name: 'id' })
  id: string;

  @Column()
  description: string;

  constructor() {
    super();
    if (!this.id) {
      this.id = uuid();
    }
  }
}
