import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserValidatorTable1793300000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "uservalidators",
        columns: [
          {
            name: "userid",
            type: "int",
            isPrimary: true,
          },
          {
            name: "username",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "hashedpassword",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP(6)",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP(6)",
          },
        ],
      }),
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("uservalidators");
  }
}
