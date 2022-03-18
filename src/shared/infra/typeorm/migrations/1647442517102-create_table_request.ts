import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableRequest1647442517102 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'request',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            length: '36',
          },
          {
            name: 'user_id',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'payment_method_id',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'total',
            type: 'float',
          },
          {
            name: 'request_date',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'delivery_rate',
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
            name: 'request_user_FK',
            referencedTableName: 'user',
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
          },
          {
            name: 'request_payment_method',
            referencedTableName: 'payment_method',
            columnNames: ['payment_method_id'],
            referencedColumnNames: ['id'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('request', 'request_payment_method');
    await queryRunner.dropForeignKey('request', 'request_user_FK');
  }
}
