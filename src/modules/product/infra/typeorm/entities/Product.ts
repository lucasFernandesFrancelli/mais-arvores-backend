import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import IProductDTO from '../../../dtos/IProductDTO';
import { DefaultEntity } from '../../../../../shared/infra/typeorm/entities/DefaultEntity';
import Category from '../../../../category/infra/typeorm/entities/Category';

@Entity('product')
export default class Product extends DefaultEntity implements IProductDTO {
  @PrimaryColumn({ name: 'id_product' })
  id: string;

  @ManyToOne(() => Category, { eager: true })
  @JoinColumn({ name: 'id_category' })
  category: Category;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  image: string;

  constructor() {
    super();
    if (!this.id) {
      this.id = uuid();
    }
  }
}
