-- AlterTable
CREATE SEQUENCE convidados_id_usuario_seq;
ALTER TABLE "Convidados" ALTER COLUMN "id_usuario" SET DEFAULT nextval('convidados_id_usuario_seq'),
ADD CONSTRAINT "Convidados_pkey" PRIMARY KEY ("id_usuario");
ALTER SEQUENCE convidados_id_usuario_seq OWNED BY "Convidados"."id_usuario";
