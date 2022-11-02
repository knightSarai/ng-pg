/*
  Warnings:

  - You are about to drop the column `from` on the `EmailReply` table. All the data in the column will be lost.
  - You are about to drop the column `to` on the `EmailReply` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_EmailReply" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "text" TEXT NOT NULL,
    "html" TEXT NOT NULL,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" INTEGER NOT NULL,
    "emailId" TEXT NOT NULL,
    CONSTRAINT "EmailReply_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "EmailReply_emailId_fkey" FOREIGN KEY ("emailId") REFERENCES "Email" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_EmailReply" ("created", "createdById", "emailId", "html", "id", "text") SELECT "created", "createdById", "emailId", "html", "id", "text" FROM "EmailReply";
DROP TABLE "EmailReply";
ALTER TABLE "new_EmailReply" RENAME TO "EmailReply";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
