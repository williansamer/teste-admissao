-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_clients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "birthday" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_clients" ("address", "birthday", "cpf", "created_at", "id", "name", "password", "username") SELECT "address", "birthday", "cpf", "created_at", "id", "name", "password", "username" FROM "clients";
DROP TABLE "clients";
ALTER TABLE "new_clients" RENAME TO "clients";
CREATE UNIQUE INDEX "clients_username_key" ON "clients"("username");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
