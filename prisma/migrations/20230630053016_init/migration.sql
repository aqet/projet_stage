/*
  Warnings:

  - You are about to drop the column `statut` on the `candidature` table. All the data in the column will be lost.
  - You are about to drop the column `contenue` on the `job` table. All the data in the column will be lost.
  - You are about to drop the column `specificite` on the `job` table. All the data in the column will be lost.
  - Added the required column `status` to the `candidature` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `specificity` to the `job` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `candidature` DROP COLUMN `statut`,
    ADD COLUMN `status` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `job` DROP COLUMN `contenue`,
    DROP COLUMN `specificite`,
    ADD COLUMN `content` VARCHAR(191) NOT NULL,
    ADD COLUMN `specificity` VARCHAR(191) NOT NULL;
