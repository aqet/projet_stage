/*
  Warnings:

  - A unique constraint covering the columns `[uuid]` on the table `Job` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Job_uuid_key` ON `Job`(`uuid`);
