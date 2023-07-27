-- DropIndex
DROP INDEX `Candidature_job_id_fkey` ON `candidature`;

-- DropIndex
DROP INDEX `Survey_job_id_fkey` ON `survey`;

-- AddForeignKey
ALTER TABLE `Survey` ADD CONSTRAINT `Survey_job_id_fkey` FOREIGN KEY (`job_id`) REFERENCES `Job`(`uuid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Candidature` ADD CONSTRAINT `Candidature_job_id_fkey` FOREIGN KEY (`job_id`) REFERENCES `Job`(`uuid`) ON DELETE RESTRICT ON UPDATE CASCADE;
