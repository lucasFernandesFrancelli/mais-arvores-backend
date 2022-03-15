import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableProduct1647351658483 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'product',
        columns: [
          {
            name: 'id_product',
            type: 'varchar(36)',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar(255)',
          },
          {
            name: 'price',
            type: 'float',
          },
          {
            name: 'image',
            type: 'varchar(255)',
          },
          {
            name: 'id_category',
            type: 'varchar(36)',
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
            name: 'product_category_FK',
            referencedTableName: 'category',
            columnNames: ['id_category'],
            referencedColumnNames: ['id_category'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('product', 'product_category_FK');
    await queryRunner.dropTable('product');
  }
}
