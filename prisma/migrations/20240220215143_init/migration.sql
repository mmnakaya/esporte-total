-- AlterTable
ALTER TABLE "Jogos_Usuarios" ADD COLUMN     "status_jogador" TEXT NOT NULL DEFAULT 'Permanente';

-- CreateTable
CREATE TABLE "Convidados" (
    "id_jogos_grupo" INTEGER NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "nome_convidado" TEXT NOT NULL,
    "status_jogador" TEXT NOT NULL DEFAULT 'Convidado',
    "confirma_presenca" BOOLEAN NOT NULL DEFAULT true,
    "notas" TEXT NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Convidados_id_jogos_grupo_nome_convidado_key" ON "Convidados"("id_jogos_grupo", "nome_convidado");

-- AddForeignKey
ALTER TABLE "Convidados" ADD CONSTRAINT "Convidados_id_jogos_grupo_fkey" FOREIGN KEY ("id_jogos_grupo") REFERENCES "Jogos_Grupo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
