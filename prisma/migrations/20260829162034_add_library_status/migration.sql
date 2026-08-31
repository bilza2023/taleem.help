-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
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
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Library" ("allowCommunication", "body", "courseSlug", "createdAt", "description", "groupSlug", "meta", "slug", "sortOrder", "thumbnail", "title", "type", "updatedAt") SELECT "allowCommunication", "body", "courseSlug", "createdAt", "description", "groupSlug", "meta", "slug", "sortOrder", "thumbnail", "title", "type", "updatedAt" FROM "Library";
DROP TABLE "Library";
ALTER TABLE "new_Library" RENAME TO "Library";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
