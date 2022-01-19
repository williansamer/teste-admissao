-- CreateTable
CREATE TABLE "operations" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "operation" TEXT NOT NULL,
    "value" REAL NOT NULL,
    "preference" TEXT NOT NULL,
    "opened" BOOLEAN NOT NULL DEFAULT true,
    "reserved" BOOLEAN NOT NULL DEFAULT false,
    "done" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "client_id" TEXT NOT NULL,
    CONSTRAINT "operations_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "sub_operations" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "value" REAL NOT NULL,
    "preference" TEXT NOT NULL,
    "opened" BOOLEAN NOT NULL DEFAULT true,
    "reserved" BOOLEAN NOT NULL DEFAULT false,
    "done" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "operations_id" TEXT NOT NULL,
    CONSTRAINT "sub_operations_operations_id_fkey" FOREIGN KEY ("operations_id") REFERENCES "operations" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "packages" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "value" REAL NOT NULL,
    "preference" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "closed_at" DATETIME NOT NULL,
    "operations_id" TEXT NOT NULL,
    CONSTRAINT "packages_operations_id_fkey" FOREIGN KEY ("operations_id") REFERENCES "operations" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
