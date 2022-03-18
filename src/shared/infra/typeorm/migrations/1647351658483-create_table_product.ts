import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableProduct1647351658483 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'product',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            length: '36',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'price',
            type: 'float',
          },
          {
            name: 'image',
            type: 'varchar',
          },
          {
            name: 'category_id',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'user_id',
            type: 'varchar',
            length: '36',
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
            columnNames: ['category_id'],
            referencedColumnNames: ['id'],
          },
          {
            name: 'product_user_FK',
            referencedTableName: 'user',
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('product');
  }
}
