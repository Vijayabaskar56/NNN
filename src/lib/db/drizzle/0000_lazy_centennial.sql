CREATE TABLE `account` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`userId` integer,
	`accountId` text,
	`providerId` text,
	`accessToken` text,
	`refreshToken` text,
	`expiresAt` text,
	`password` text,
	FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `session` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`userId` integer,
	`expiresAt` text,
	`ipAddress` text,
	`userAgent` text,
	FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text,
	`email` text,
	`emailVerified` integer,
	`image` text,
	`createdAt` text DEFAULT 'CURRENT_TIMESTAMP',
	`updatedAt` text DEFAULT 'CURRENT_TIMESTAMP'
);
--> statement-breakpoint
CREATE TABLE `verification` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`identifier` text,
	`value` text,
	`expiresAt` text
);
