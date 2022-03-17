import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

import { DefaultEntity } from '../../../../../shared/infra/typeorm/entities/DefaultEntity';

@Entity('user')
export default class User extends DefaultEntity {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'is_active' })
  isActive: boolean;

  @Column({ name: 'is_admin' })
  isAdmin: boolean;

  constructor() {
    super();
    if (!this.id) {
      this.id = uuid();
    }
  }
}
