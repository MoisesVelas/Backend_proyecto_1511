CREATE TABLE `users` (
	
	`name` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`email` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`pass` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
	`is_admin` TINYINT(1) NOT NULL DEFAULT '0',
	`remember_token` VARCHAR(100) NULL DEFAULT NULL COLLATE 'utf8mb4_unicode_ci',
	`created_at` TIMESTAMP NULL DEFAULT NULL,
	`updated_at` TIMESTAMP NULL DEFAULT NULL,
	PRIMARY KEY (`id`),
	UNIQUE INDEX `users_email_unique` (`email`)
)
COLLATE='utf8mb4_unicode_ci'
ENGINE=InnoDB
AUTO_INCREMENT=6
;