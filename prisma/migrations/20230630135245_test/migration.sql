-- DropIndex
DROP INDEX `Survey_job_id_fkey` ON `survey`;

-- AlterTable
ALTER TABLE `candidature` MODIFY `name` VARCHAR(191) NULL,
    MODIFY `cv` VARCHAR(191) NULL,
    MODIFY `mail` VARCHAR(191) NULL,
    MODIFY `cover_letter` VARCHAR(191) NULL,
    MODIFY `job_name` VARCHAR(191) NULL,
    MODIFY `test_note` VARCHAR(191) NULL,
    MODIFY `survey_note` VARCHAR(191) NULL,
    MODIFY `status` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Survey` ADD CONSTRAINT `Survey_job_id_fkey` FOREIGN KEY (`job_id`) REFERENCES `Job`(`uuid`) ON DELETE RESTRICT ON UPDATE CASCADE;
