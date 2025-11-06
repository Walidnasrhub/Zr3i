CREATE TABLE `carbonCredits` (
	`id` int AUTO_INCREMENT NOT NULL,
	`projectId` int NOT NULL,
	`creditType` varchar(100) NOT NULL,
	`quantity` int NOT NULL,
	`vintage` int NOT NULL,
	`verificationStandard` varchar(100) NOT NULL,
	`price` int NOT NULL,
	`available` int NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `carbonCredits_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `contactInquiries` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(20),
	`company` varchar(255),
	`inquiryType` varchar(100) NOT NULL,
	`message` text NOT NULL,
	`status` enum('new','read','responded') NOT NULL DEFAULT 'new',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `contactInquiries_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `projects` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`titleAr` varchar(255) NOT NULL,
	`description` text NOT NULL,
	`descriptionAr` text NOT NULL,
	`location` varchar(255) NOT NULL,
	`areaHectares` int NOT NULL,
	`carbonSequestrationTonnes` int NOT NULL,
	`status` enum('planning','active','completed') NOT NULL DEFAULT 'planning',
	`imageUrl` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `projects_id` PRIMARY KEY(`id`)
);
