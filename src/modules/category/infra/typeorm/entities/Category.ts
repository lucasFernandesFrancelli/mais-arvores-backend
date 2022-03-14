import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { DefaultEntity } from '../../../../../shared/infra/typeorm/entities/DefaultEntity';
import ICategoryDTO from '../../../dtos/ICategoryDTO';

@Entity('category')
export default class Category extends DefaultEntity implements ICategoryDTO {
  @PrimaryColumn({ name: 'id_category' })
  readonly id: string;

  @Column()
  name: string;

  constructor() {
    super();
    if (!this.id) {
      this.id = uuid();
    }
  }
}
