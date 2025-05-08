/*
  Warnings:

  - Added the required column `utm_source` to the `Utms` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Utms" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "utm_source" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Utms_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Utms" ("id", "user_id") SELECT "id", "user_id" FROM "Utms";
DROP TABLE "Utms";
ALTER TABLE "new_Utms" RENAME TO "Utms";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
