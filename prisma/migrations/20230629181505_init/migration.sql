-- CreateTable
CREATE TABLE `Survey` (
    `uuid` VARCHAR(191) NOT NULL,
    `job_name` VARCHAR(191) NOT NULL,
    `survey_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`uuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
