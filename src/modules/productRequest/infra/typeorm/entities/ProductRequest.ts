import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { IProductRequestDTO } from '../../../dtos/IProductRequestDTO';
import { DefaultEntity } from '../../../../../shared/infra/typeorm/entities/DefaultEntity';
import Product from '../../../../product/infra/typeorm/entities/Product';
import { Request } from '../../../../request/infra/typeorm/entities/Request';

@Entity('product_request')
export class ProductRequest
  extends DefaultEntity
  implements IProductRequestDTO
{
  @OneToOne(() => Product, { primary: true })
  @JoinColumn({ name: 'product_id', referencedColumnName: 'id' })
  product: Product;

  @OneToOne(() => Request, { primary: true })
  @JoinColumn({ name: 'request_id', referencedColumnName: 'id' })
  request: Request;

  @Column({ name: 'product_quantity' })
  quantity: number;

  @Column({ name: 'current_price' })
  price: number;
}
