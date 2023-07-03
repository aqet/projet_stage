-- CreateTable
CREATE TABLE `job` (
    `uuid` VARCHAR(191) NOT NULL,
    `job_name` VARCHAR(191) NOT NULL,
    `contenue` VARCHAR(191) NOT NULL,
    `specificite` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`uuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `candidature` (
    `uuid` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `cv` VARCHAR(191) NOT NULL,
    `mail` VARCHAR(191) NOT NULL,
    `cover_letter` VARCHAR(191) NOT NULL,
    `job_name` VARCHAR(191) NOT NULL,
    `test_note` VARCHAR(191) NOT NULL,
    `survey_note` VARCHAR(191) NOT NULL,
    `statut` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`uuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
