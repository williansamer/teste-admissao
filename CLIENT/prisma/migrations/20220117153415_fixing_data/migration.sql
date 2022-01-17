/*
  Warnings:

  - You are about to alter the column `preference` on the `sub_operations` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to drop the column `client_id` on the `operations` table. All the data in the column will be lost.
  - You are about to alter the column `preference` on the `operations` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `preference` on the `packages` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - Added the required column `id_client` to the `operations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_operation` to the `operations` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_sub_operations" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "value" REAL NOT NULL,
    "preference" INTEGER NOT NULL,
    "opened" BOOLEAN NOT NULL DEFAULT true,
    "reserved" BOOLEAN NOT NULL DEFAULT false,
    "done" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "operations_id" TEXT NOT NULL,
    CONSTRAINT "sub_operations_operations_id_fkey" FOREIGN KEY ("operations_id") REFERENCES "operations" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_sub_operations" ("created_at", "done", "id", "opened", "operations_id", "preference", "reserved", "value") SELECT "created_at", "done", "id", "opened", "operations_id", "preference", "reserved", "value" FROM "sub_operations";
DROP TABLE "sub_operations";
ALTER TABLE "new_sub_operations" RENAME TO "sub_operations";
CREATE TABLE "new_operations" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name_operation" TEXT NOT NULL,
    "operation" TEXT NOT NULL,
    "value" REAL NOT NULL,
    "preference" INTEGER NOT NULL,
    "opened" BOOLEAN NOT NULL DEFAULT true,
    "reserved" BOOLEAN NOT NULL DEFAULT false,
    "done" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_client" TEXT NOT NULL,
    CONSTRAINT "operations_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "clients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_operations" ("created_at", "done", "id", "opened", "operation", "preference", "reserved", "value") SELECT "created_at", "done", "id", "opened", "operation", "preference", "reserved", "value" FROM "operations";
DROP TABLE "operations";
ALTER TABLE "new_operations" RENAME TO "operations";
CREATE TABLE "new_packages" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "value" REAL NOT NULL,
    "preference" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "closed_at" DATETIME NOT NULL,
    "operations_id" TEXT NOT NULL,
    CONSTRAINT "packages_operations_id_fkey" FOREIGN KEY ("operations_id") REFERENCES "operations" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_packages" ("closed_at", "created_at", "id", "operations_id", "preference", "value") SELECT "closed_at", "created_at", "id", "operations_id", "preference", "value" FROM "packages";
DROP TABLE "packages";
ALTER TABLE "new_packages" RENAME TO "packages";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
