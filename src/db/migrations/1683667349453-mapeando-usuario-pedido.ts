import { MigrationInterface, QueryRunner } from "typeorm";

export class MapeandoUsuarioPedido1683667349453 implements MigrationInterface {
    name = 'MapeandoUsuarioPedido1683667349453'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."pedidos_status_enum" AS ENUM('cancelado', 'aprovado', 'processando')`);
        await queryRunner.query(`CREATE TABLE "pedidos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "valor_total" double precision NOT NULL, "status" "public"."pedidos_status_enum" NOT NULL DEFAULT 'processando', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "usuarioId" uuid, CONSTRAINT "PK_ebb5680ed29a24efdc586846725" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "pedidos" ADD CONSTRAINT "FK_e60a655127c227b5e063e73165b" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);//altera a tabela pedidos e cria uma chave estrangeira. Pode acontecer de uma query não ser gerada de acordo com o que queremos, aí precisamos mudar as querys no código bruto
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedidos" DROP CONSTRAINT "FK_e60a655127c227b5e063e73165b"`);
        await queryRunner.query(`DROP TABLE "pedidos"`);
        await queryRunner.query(`DROP TYPE "public"."pedidos_status_enum"`);
    }

}
