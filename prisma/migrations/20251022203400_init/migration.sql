/*
  Warnings:

  - You are about to drop the column `stats` on the `Commission` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Commission" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "status" TEXT NOT NULL DEFAULT 'Queued',
    "notes" TEXT NOT NULL DEFAULT '-'
);
INSERT INTO "new_Commission" ("id", "notes") SELECT "id", "notes" FROM "Commission";
DROP TABLE "Commission";
ALTER TABLE "new_Commission" RENAME TO "Commission";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
