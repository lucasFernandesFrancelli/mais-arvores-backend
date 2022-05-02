import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableDefaultRequestStatus1651233456576
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'default_request_status',
        columns: [
          {
            name: 'id_default_request_status',
            type: 'varchar',
            isPrimary: true,
            length: '36',
          },
          {
            name: 'description',
            type: 'varchar',
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
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('default_request_status');
  }
}
