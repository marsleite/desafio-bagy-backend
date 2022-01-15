-- CreateTable
CREATE TABLE "Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "parcelas" INTEGER NOT NULL,
    "clientId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "order_date" DATETIME NOT NULL,
    CONSTRAINT "Order_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "peso" REAL NOT NULL,
    "preco" REAL NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Product" ("descricao", "id", "imagem", "name", "peso", "preco", "quantidade") SELECT "descricao", "id", "imagem", "name", "peso", "preco", "quantidade" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
