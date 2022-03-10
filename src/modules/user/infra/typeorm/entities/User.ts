import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

import { DefaultEntity } from '../../../../../shared/infra/typeorm/entities/DefaultEntity';

@Entity('user')
export default class User extends DefaultEntity {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ name: 'is_active' })
  isActive: boolean;

  @Column()
  admin: boolean;

  constructor() {
    super();
    if (!this.id) {
      this.id = uuid();
    }
  }
}
