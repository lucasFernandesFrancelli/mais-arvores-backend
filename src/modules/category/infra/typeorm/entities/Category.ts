import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { DefaultEntity } from '../../../../../shared/infra/typeorm/entities/DefaultEntity';
import ICategoryDTO from '../../../dtos/ICategoryDTO';
import User from '../../../../user/infra/typeorm/entities/User';

@Entity('category')
export default class Category extends DefaultEntity implements ICategoryDTO {
  @PrimaryColumn()
  readonly id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;

  @Column()
  description: string;

  constructor() {
    super();
    if (!this.id) {
      this.id = uuid();
    }
  }
}
