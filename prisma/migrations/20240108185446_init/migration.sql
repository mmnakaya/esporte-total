-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Jogos_Grupo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_grupo" INTEGER NOT NULL,
    "data_jogo" TEXT NOT NULL,
    "horario_jogo" TEXT NOT NULL,
    "timestamp_jogo" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "descricao_jogo" TEXT,
    "data_criacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Jogos_Grupo_id_grupo_fkey" FOREIGN KEY ("id_grupo") REFERENCES "Grupo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Jogos_Grupo" ("data_criacao", "data_jogo", "descricao_jogo", "horario_jogo", "id", "id_grupo") SELECT "data_criacao", "data_jogo", "descricao_jogo", "horario_jogo", "id", "id_grupo" FROM "Jogos_Grupo";
DROP TABLE "Jogos_Grupo";
ALTER TABLE "new_Jogos_Grupo" RENAME TO "Jogos_Grupo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
