-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_packages" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "value" REAL NOT NULL,
    "preference" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "closed_at" DATETIME,
    "id_operation" TEXT NOT NULL,
    CONSTRAINT "packages_id_operation_fkey" FOREIGN KEY ("id_operation") REFERENCES "operations" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_packages" ("closed_at", "created_at", "id", "id_operation", "preference", "value") SELECT "closed_at", "created_at", "id", "id_operation", "preference", "value" FROM "packages";
DROP TABLE "packages";
ALTER TABLE "new_packages" RENAME TO "packages";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
