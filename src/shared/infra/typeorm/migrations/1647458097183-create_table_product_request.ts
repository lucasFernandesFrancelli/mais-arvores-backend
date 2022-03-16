import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableProductRequest1647458097183
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'product_request',
        columns: [
          {
            name: 'product_id',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'request_id',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'product_quantity',
            type: 'integer',
          },
          {
            name: 'current_price',
            type: 'float',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
            default: null,
          },
        ],
        foreignKeys: [
          {
            name: 'product_request_product_FK',
            referencedTableName: 'product',
            columnNames: ['product_id'],
            referencedColumnNames: ['id'],
          },
          {
            name: 'product_request_request_FK',
            referencedTableName: 'request',
            columnNames: ['request_id'],
            referencedColumnNames: ['id'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('product_request');
  }
}
