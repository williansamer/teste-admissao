/*
  Warnings:

  - You are about to drop the column `operation_id` on the `packages` table. All the data in the column will be lost.
  - You are about to drop the column `operation_id` on the `sub_operations` table. All the data in the column will be lost.
  - Added the required column `id_operation` to the `packages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_operation` to the `sub_operations` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_packages" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "value" REAL NOT NULL,
    "preference" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "closed_at" DATETIME NOT NULL,
    "id_operation" TEXT NOT NULL,
    CONSTRAINT "packages_id_operation_fkey" FOREIGN KEY ("id_operation") REFERENCES "operations" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_packages" ("closed_at", "created_at", "id", "preference", "value") SELECT "closed_at", "created_at", "id", "preference", "value" FROM "packages";
DROP TABLE "packages";
ALTER TABLE "new_packages" RENAME TO "packages";
CREATE TABLE "new_sub_operations" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "value" REAL NOT NULL,
    "preference" INTEGER NOT NULL,
    "opened" BOOLEAN NOT NULL DEFAULT true,
    "reserved" BOOLEAN NOT NULL DEFAULT false,
    "done" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_operation" TEXT NOT NULL,
    CONSTRAINT "sub_operations_id_operation_fkey" FOREIGN KEY ("id_operation") REFERENCES "operations" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_sub_operations" ("created_at", "done", "id", "opened", "preference", "reserved", "value") SELECT "created_at", "done", "id", "opened", "preference", "reserved", "value" FROM "sub_operations";
DROP TABLE "sub_operations";
ALTER TABLE "new_sub_operations" RENAME TO "sub_operations";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
