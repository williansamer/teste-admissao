/*
  Warnings:

  - You are about to alter the column `value` on the `packages` table. The data in that column could be lost. The data in that column will be cast from `Float` to `Int`.
  - You are about to alter the column `value` on the `operations` table. The data in that column could be lost. The data in that column will be cast from `Float` to `Int`.
  - You are about to alter the column `value` on the `sub_packages` table. The data in that column could be lost. The data in that column will be cast from `Float` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_packages" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "value" INTEGER NOT NULL,
    "preference" INTEGER NOT NULL,
    "rest" REAL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "closed_at" DATETIME,
    "id_client" TEXT NOT NULL,
    "id_operation" TEXT NOT NULL,
    CONSTRAINT "packages_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "clients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "packages_id_operation_fkey" FOREIGN KEY ("id_operation") REFERENCES "operations" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_packages" ("closed_at", "created_at", "id", "id_client", "id_operation", "preference", "rest", "value") SELECT "closed_at", "created_at", "id", "id_client", "id_operation", "preference", "rest", "value" FROM "packages";
DROP TABLE "packages";
ALTER TABLE "new_packages" RENAME TO "packages";
CREATE TABLE "new_operations" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name_operation" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "preference" INTEGER NOT NULL,
    "qtt_notes" INTEGER NOT NULL,
    "qtt_packages" INTEGER NOT NULL,
    "opened" BOOLEAN NOT NULL DEFAULT true,
    "reserved" BOOLEAN NOT NULL DEFAULT false,
    "done" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_client" TEXT NOT NULL,
    CONSTRAINT "operations_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "clients" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_operations" ("created_at", "done", "id", "id_client", "name_operation", "opened", "preference", "qtt_notes", "qtt_packages", "reserved", "value") SELECT "created_at", "done", "id", "id_client", "name_operation", "opened", "preference", "qtt_notes", "qtt_packages", "reserved", "value" FROM "operations";
DROP TABLE "operations";
ALTER TABLE "new_operations" RENAME TO "operations";
CREATE TABLE "new_sub_packages" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "value" INTEGER NOT NULL,
    "preference" INTEGER NOT NULL,
    "rest" REAL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "closed_at" DATETIME,
    "id_client" TEXT NOT NULL,
    "id_operation" TEXT NOT NULL,
    "id_package" TEXT NOT NULL,
    CONSTRAINT "sub_packages_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "clients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "sub_packages_id_operation_fkey" FOREIGN KEY ("id_operation") REFERENCES "operations" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "sub_packages_id_package_fkey" FOREIGN KEY ("id_package") REFERENCES "packages" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_sub_packages" ("closed_at", "created_at", "id", "id_client", "id_operation", "id_package", "preference", "rest", "value") SELECT "closed_at", "created_at", "id", "id_client", "id_operation", "id_package", "preference", "rest", "value" FROM "sub_packages";
DROP TABLE "sub_packages";
ALTER TABLE "new_sub_packages" RENAME TO "sub_packages";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
