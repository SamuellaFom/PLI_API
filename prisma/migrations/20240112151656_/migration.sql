/*
  Warnings:

  - You are about to alter the column `image_url` on the `Posts` table. The data in that column could be lost. The data in that column will be cast from `LongBlob` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `Posts` MODIFY `image_url` VARCHAR(191) NOT NULL;
