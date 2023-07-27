/*
  Warnings:

  - Added the required column `qualification` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Candidature_job_id_fkey` ON `candidature`;

-- DropIndex
DROP INDEX `Survey_job_id_fkey` ON `survey`;

-- AlterTable
ALTER TABLE `job` ADD COLUMN `qualification` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Survey` ADD CONSTRAINT `Survey_job_id_fkey` FOREIGN KEY (`job_id`) REFERENCES `Job`(`uuid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Candidature` ADD CONSTRAINT `Candidature_job_id_fkey` FOREIGN KEY (`job_id`) REFERENCES `Job`(`uuid`) ON DELETE RESTRICT ON UPDATE CASCADE;
