-- CreateTable
CREATE TABLE `Dogs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `race` VARCHAR(191) NOT NULL,
    `birthday` DATETIME(3) NOT NULL,
    `age` INTEGER NOT NULL,
    `poids` INTEGER NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `sterilization` BOOLEAN NOT NULL,
    `profile_picture` VARCHAR(191) NOT NULL,
    `interest` JSON NOT NULL,

    UNIQUE INDEX `Dogs_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Matchs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dog1Id` INTEGER NOT NULL,
    `match_receiver` INTEGER NOT NULL,
    `status` ENUM('MATCH', 'WAITING', 'REFUSED') NOT NULL DEFAULT 'WAITING',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Likes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dogId` INTEGER NOT NULL,
    `postId` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Posts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dogId` INTEGER NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `image_url` LONGBLOB NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Messages` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `senderId` INTEGER NOT NULL,
    `receiverId` INTEGER NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Matchs` ADD CONSTRAINT `Matchs_dog1Id_fkey` FOREIGN KEY (`dog1Id`) REFERENCES `Dogs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Matchs` ADD CONSTRAINT `Matchs_match_receiver_fkey` FOREIGN KEY (`match_receiver`) REFERENCES `Dogs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Likes` ADD CONSTRAINT `Likes_dogId_fkey` FOREIGN KEY (`dogId`) REFERENCES `Dogs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Likes` ADD CONSTRAINT `Likes_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Posts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Posts` ADD CONSTRAINT `Posts_dogId_fkey` FOREIGN KEY (`dogId`) REFERENCES `Dogs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Messages` ADD CONSTRAINT `Messages_senderId_fkey` FOREIGN KEY (`senderId`) REFERENCES `Dogs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Messages` ADD CONSTRAINT `Messages_receiverId_fkey` FOREIGN KEY (`receiverId`) REFERENCES `Dogs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
