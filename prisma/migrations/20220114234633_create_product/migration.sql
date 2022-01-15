-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "peso" REAL NOT NULL,
    "preco" REAL NOT NULL,
    "quantidade" INTEGER NOT NULL
);
