-- CreateTable
CREATE TABLE "Grupo_Usuario" (
    "id_grupo" INTEGER NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "data_criacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Grupo_Usuario_id_grupo_id_usuario_key" ON "Grupo_Usuario"("id_grupo", "id_usuario");
