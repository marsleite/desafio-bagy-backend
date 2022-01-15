/*
  Warnings:

  - Added the required column `stock` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "OrderItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "orderId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL,
    CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OrderItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "parcelas" INTEGER NOT NULL,
    "clientId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "order_date" DATETIME NOT NULL,
    "stock" INTEGER NOT NULL,
    CONSTRAINT "Order_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Order" ("clientId", "id", "order_date", "parcelas", "status") SELECT "clientId", "id", "order_date", "parcelas", "status" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
