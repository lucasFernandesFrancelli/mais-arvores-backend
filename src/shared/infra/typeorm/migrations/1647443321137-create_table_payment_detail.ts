import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTablePaymentDetail1647443321137
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'payment_detail',
        columns: [
          {
            name: 'request_id',
            type: 'varchar',
            isPrimary: true,
            length: '36',
          },
          {
            name: 'change',
            type: 'float',
          },
          {
            name: 'provided',
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
            name: 'payment_detail_request_FK',
            referencedTableName: 'request',
            columnNames: ['request_id'],
            referencedColumnNames: ['id'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'payment_detail',
      'payment_detail_request_FK',
    );
  }
}
