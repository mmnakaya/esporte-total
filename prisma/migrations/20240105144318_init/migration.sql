-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN DEFAULT false,
    "authorId" INTEGER,
    CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Grupo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_criador" INTEGER NOT NULL,
    "nome_grupo" TEXT NOT NULL,
    "descricao_grupo" TEXT NOT NULL,
    "data_criacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Grupo_id_criador_fkey" FOREIGN KEY ("id_criador") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome_usuario" TEXT NOT NULL,
    "cpf" TEXT,
    "email" TEXT NOT NULL,
    "codigo_ddd" TEXT NOT NULL,
    "numero_telefone" INTEGER NOT NULL,
    "data_criacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Jogos_Grupo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_grupo" INTEGER NOT NULL,
    "data_jogo" TEXT NOT NULL,
    "horario_jogo" TEXT NOT NULL,
    "descricao_jogo" TEXT,
    "data_criacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Jogos_Grupo_id_grupo_fkey" FOREIGN KEY ("id_grupo") REFERENCES "Grupo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Jogos_Usuarios" (
    "id_jogos_grupo" INTEGER NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "confirma_presenca" BOOLEAN NOT NULL DEFAULT false,
    "notas" TEXT NOT NULL,
    "data_criacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Jogos_Usuarios_id_jogos_grupo_fkey" FOREIGN KEY ("id_jogos_grupo") REFERENCES "Jogos_Grupo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Jogos_Usuarios_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Grupo_Usuario" (
    "id_grupo" INTEGER NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "eh_administrador" BOOLEAN NOT NULL DEFAULT false,
    "data_criacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Grupo_Usuario_id_grupo_fkey" FOREIGN KEY ("id_grupo") REFERENCES "Grupo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Grupo_Usuario_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Jogos_Usuarios_id_jogos_grupo_id_usuario_key" ON "Jogos_Usuarios"("id_jogos_grupo", "id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "Grupo_Usuario_id_grupo_id_usuario_key" ON "Grupo_Usuario"("id_grupo", "id_usuario");
