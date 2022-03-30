import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import IProductDTO from '../../../dtos/IProductDTO';
import { DefaultEntity } from '../../../../../shared/infra/typeorm/entities/DefaultEntity';
import Category from '../../../../category/infra/typeorm/entities/Category';
import User from '../../../../user/infra/typeorm/entities/User';

@Entity('product')
export default class Product extends DefaultEntity implements IProductDTO {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id', referencedColumnName: 'id' })
  category: Category;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;

  @Column()
  description: string;

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
