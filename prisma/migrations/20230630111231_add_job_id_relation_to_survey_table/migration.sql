/*
  Warnings:

  - Added the required column `job_id` to the `Survey` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Job_uuid_key` ON `job`;

-- AlterTable
ALTER TABLE `survey` ADD COLUMN `job_id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Survey` ADD CONSTRAINT `Survey_job_id_fkey` FOREIGN KEY (`job_id`) REFERENCES `Job`(`uuid`) ON DELETE RESTRICT ON UPDATE CASCADE;
