/*
  Warnings:

  - You are about to drop the column `items` on the `Group` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Communication" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "librarySlug" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "initiator" TEXT NOT NULL DEFAULT 'STUDENT',
    "meta" TEXT,
    "message" TEXT NOT NULL,
    "authorResponse" TEXT,
    "isPublic" BOOLEAN NOT NULL DEFAULT false,
    "readAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Communication_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Communication_librarySlug_fkey" FOREIGN KEY ("librarySlug") REFERENCES "Library" ("slug") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Communication" ("authorResponse", "createdAt", "id", "isPublic", "librarySlug", "message", "meta", "readAt", "type", "updatedAt", "userId") SELECT "authorResponse", "createdAt", "id", "isPublic", "librarySlug", "message", "meta", "readAt", "type", "updatedAt", "userId" FROM "Communication";
DROP TABLE "Communication";
ALTER TABLE "new_Communication" RENAME TO "Communication";
CREATE INDEX "Communication_userId_idx" ON "Communication"("userId");
CREATE INDEX "Communication_librarySlug_idx" ON "Communication"("librarySlug");
CREATE TABLE "new_Course" (
    "slug" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "thumbnail" TEXT,
    "access" TEXT NOT NULL DEFAULT 'OPEN',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "price" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_Course" ("access", "description", "price", "slug", "thumbnail", "title") SELECT "access", "description", "price", "slug", "thumbnail", "title" FROM "Course";
DROP TABLE "Course";
ALTER TABLE "new_Course" RENAME TO "Course";
CREATE TABLE "new_Group" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "courseSlug" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "thumbnail" TEXT,
    "description" TEXT,
    CONSTRAINT "Group_courseSlug_fkey" FOREIGN KEY ("courseSlug") REFERENCES "Course" ("slug") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Group" ("courseSlug", "id", "slug", "thumbnail", "title") SELECT "courseSlug", "id", "slug", "thumbnail", "title" FROM "Group";
DROP TABLE "Group";
ALTER TABLE "new_Group" RENAME TO "Group";
CREATE INDEX "Group_courseSlug_idx" ON "Group"("courseSlug");
CREATE UNIQUE INDEX "Group_courseSlug_slug_key" ON "Group"("courseSlug", "slug");
CREATE TABLE "new_Library" (
    "slug" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "thumbnail" TEXT,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "body" TEXT,
    "courseSlug" TEXT NOT NULL,
    "groupSlug" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "allowCommunication" BOOLEAN NOT NULL DEFAULT true,
    "meta" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Library_courseSlug_groupSlug_fkey" FOREIGN KEY ("courseSlug", "groupSlug") REFERENCES "Group" ("courseSlug", "slug") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Library" ("allowCommunication", "body", "courseSlug", "createdAt", "description", "groupSlug", "meta", "slug", "sortOrder", "status", "thumbnail", "title", "type", "updatedAt") SELECT "allowCommunication", "body", "courseSlug", "createdAt", "description", "groupSlug", "meta", "slug", "sortOrder", "status", "thumbnail", "title", "type", "updatedAt" FROM "Library";
DROP TABLE "Library";
ALTER TABLE "new_Library" RENAME TO "Library";
CREATE INDEX "Library_courseSlug_idx" ON "Library"("courseSlug");
CREATE INDEX "Library_groupSlug_idx" ON "Library"("groupSlug");
CREATE TABLE "new_Subscription" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "courseSlug" TEXT NOT NULL,
    "startsAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endsAt" DATETIME,
    "amount" INTEGER,
    "cancelledAt" DATETIME,
    CONSTRAINT "Subscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Subscription_courseSlug_fkey" FOREIGN KEY ("courseSlug") REFERENCES "Course" ("slug") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Subscription" ("amount", "cancelledAt", "courseSlug", "endsAt", "id", "startsAt", "userId") SELECT "amount", "cancelledAt", "courseSlug", "endsAt", "id", "startsAt", "userId" FROM "Subscription";
DROP TABLE "Subscription";
ALTER TABLE "new_Subscription" RENAME TO "Subscription";
CREATE INDEX "Subscription_userId_idx" ON "Subscription"("userId");
CREATE INDEX "Subscription_courseSlug_idx" ON "Subscription"("courseSlug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
