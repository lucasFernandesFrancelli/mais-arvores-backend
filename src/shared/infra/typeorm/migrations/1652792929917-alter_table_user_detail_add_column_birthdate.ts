import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class alterTableUserDetailAddColumnBirthdate1652792929917
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'user_detail',
      new TableColumn({
        name: 'birthdate',
        type: 'date',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('user_detail', 'birthdate');
  }
}
