import { z } from "zod";

const PublishCourseSchema = z.object({
	slug: z.string().min(1),
	title: z.string().min(1),
	description: z.string().optional(),
	thumbnail: z.string().optional()
});

const PublishGroupingSchema = z.object({
	slug: z.string().min(1),
	title: z.string().min(1),
	thumbnail: z.string().optional(),
	sortOrder: z.number().int().nonnegative().optional(),
	items: z.array(
		z.string().min(1)
	)
});

const PublishArticleSchema = z.object({
	slug: z.string().min(1),
	title: z.string().min(1),
	description: z.string().optional(),
	thumbnail: z.string().optional(),
	type: z.literal("ARTICLE"),
	body: z.string(),
	groupingId: z.string().min(1),
	sortOrder: z.number().int().nonnegative()
});

const PublishPlayerSchema = z.object({
	slug: z.string().min(1),
	title: z.string().min(1),
	description: z.string().optional(),
	thumbnail: z.string().optional(),
	type: z.literal("PLAYER"),
	body: z.string(),
	groupingId: z.string().min(1),
	sortOrder: z.number().int().nonnegative()
});

const PublishMCQSchema = z.object({
	slug: z.string().min(1),
	title: z.string().min(1),
	description: z.string().optional(),
	thumbnail: z.string().optional(),
	type: z.literal("MCQ"),
	body: z.string(),
	groupingId: z.string().min(1),
	sortOrder: z.number().int().nonnegative()
});

export const PublishLibraryItemSchema = z.discriminatedUnion(
	"type",
	[
		PublishArticleSchema,
		PublishPlayerSchema,
		PublishMCQSchema
	]
);

export const PublishSchema = z.object({
	course: PublishCourseSchema,

	groupings: z.array(
		PublishGroupingSchema
	),

	library: z.array(
		PublishLibraryItemSchema
	)
});

export {
	PublishCourseSchema,
	PublishGroupingSchema,
	PublishArticleSchema,
	PublishPlayerSchema,
	PublishMCQSchema
};

export default PublishSchema;