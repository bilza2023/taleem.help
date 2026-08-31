/*
  Warnings:

  - You are about to drop the column `groupings` on the `Course` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Group" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "courseSlug" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "thumbnail" TEXT,
    "items" JSONB NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Course" (
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "thumbnail" TEXT,
    "access" TEXT NOT NULL DEFAULT 'OPEN',
    "price" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_Course" ("access", "description", "price", "slug", "thumbnail", "title") SELECT "access", "description", "price", "slug", "thumbnail", "title" FROM "Course";
DROP TABLE "Course";
ALTER TABLE "new_Course" RENAME TO "Course";
CREATE UNIQUE INDEX "Course_slug_key" ON "Course"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE INDEX "Group_courseSlug_idx" ON "Group"("courseSlug");

-- CreateIndex
CREATE UNIQUE INDEX "Group_courseSlug_slug_key" ON "Group"("courseSlug", "slug");
