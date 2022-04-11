import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class alterTableProduct1649686980306 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('product', 'image');

    await queryRunner.addColumn(
      'product',
      new TableColumn({
        name: 'image',
        type: 'varchar',
        isNullable: true,
        default: null,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('product', 'image');
    await queryRunner.addColumn(
      'product',
      new TableColumn({
        name: 'image',
        type: 'varchar',
      }),
    );
  }
}
