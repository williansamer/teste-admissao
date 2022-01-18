/*
  Warnings:

  - You are about to drop the `sub_operations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "sub_operations";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "sub_packages" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "value" REAL NOT NULL,
    "preference" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "closed_at" DATETIME,
    "id_client" TEXT NOT NULL,
    "id_operation" TEXT NOT NULL,
    "id_package" TEXT NOT NULL,
    CONSTRAINT "sub_packages_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "clients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "sub_packages_id_operation_fkey" FOREIGN KEY ("id_operation") REFERENCES "operations" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "sub_packages_id_package_fkey" FOREIGN KEY ("id_package") REFERENCES "packages" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
