CREATE TABLE `reservations` (
	`id` text PRIMARY KEY NOT NULL,
	`request_key` text NOT NULL,
	`reference` text NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text NOT NULL,
	`experience` text NOT NULL,
	`desired_date` text NOT NULL,
	`people` integer NOT NULL,
	`language` text NOT NULL,
	`notes` text DEFAULT '' NOT NULL,
	`status` text DEFAULT 'new' NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `reservations_request_key_unique` ON `reservations` (`request_key`);--> statement-breakpoint
CREATE UNIQUE INDEX `reservations_reference_unique` ON `reservations` (`reference`);--> statement-breakpoint
CREATE INDEX `reservations_created_at_idx` ON `reservations` (`created_at`);