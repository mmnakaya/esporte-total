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
    "id_Criador" INTEGER NOT NULL,
    "nome_grupo" TEXT NOT NULL,
    "descricao_grupo" TEXT NOT NULL,
    "data_criacao" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome_usuario" TEXT NOT NULL,
    "cpf" TEXT,
    "email" TEXT NOT NULL,
    "codigo_DDD" TEXT NOT NULL,
    "numero_Telefone" INTEGER NOT NULL,
    "data_criacao" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Jogos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_grupo" INTEGER NOT NULL,
    "id_jogador" INTEGER NOT NULL,
    "data_jogo" TEXT NOT NULL,
    "horario_jogo" TEXT NOT NULL,
    "descricao_jogo" TEXT,
    "data_criacao" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
