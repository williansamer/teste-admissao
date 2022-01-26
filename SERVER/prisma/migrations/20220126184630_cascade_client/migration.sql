-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_operations" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name_operation" TEXT NOT NULL,
    "value" REAL NOT NULL,
    "preference" INTEGER NOT NULL,
    "opened" BOOLEAN NOT NULL DEFAULT true,
    "reserved" BOOLEAN NOT NULL DEFAULT false,
    "done" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_client" TEXT NOT NULL,
    CONSTRAINT "operations_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "clients" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_operations" ("created_at", "done", "id", "id_client", "name_operation", "opened", "preference", "reserved", "value") SELECT "created_at", "done", "id", "id_client", "name_operation", "opened", "preference", "reserved", "value" FROM "operations";
DROP TABLE "operations";
ALTER TABLE "new_operations" RENAME TO "operations";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
