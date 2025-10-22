-- CreateTable
CREATE TABLE "Commission" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "stats" TEXT NOT NULL DEFAULT 'Queued',
    "notes" TEXT NOT NULL DEFAULT '-'
);
