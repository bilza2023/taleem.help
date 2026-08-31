// /home/bilal-tariq/00--TALEEM/taleem.studio/tests/library.test.js

import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { request } from "../src/lib/server/server.js";
import { createCourseWithContent, destroyCourse } from "./fixture/basic-course.js";

const runId = Date.now();

describe("Story: library CRUD via server.js dispatcher", () => {
	let fixture;

	beforeAll(async () => {
		fixture = await createCourseWithContent({ courseSlug: `studio-library-course-${runId}` });
	});

	it("gets the article by slug", async () => {
		const article = await request({
			module: "library",
			method: "get",
			data: { slug: fixture.articleSlug }
		});

		expect(article.slug).toBe(fixture.articleSlug);
		expect(article.type).toBe("ARTICLE");
		expect(article.status).toBe("DRAFT");
	});

	it("lists library items including both fixtures", async () => {
		const items = await request({
			module: "library",
			method: "list",
			data: {}
		});

		expect(items.some(i => i.slug === fixture.articleSlug)).toBe(true);
		expect(items.some(i => i.slug === fixture.playerSlug)).toBe(true);
	});

	it("lists library items scoped to the course/group", async () => {
		const items = await request({
			module: "library",
			method: "listByGroup",
			data: { courseSlug: fixture.courseSlug, groupSlug: fixture.groupSlug }
		});

		expect(items.some(i => i.slug === fixture.articleSlug)).toBe(true);
		expect(items.some(i => i.slug === fixture.playerSlug)).toBe(true);
	});

	it("rejects create with an invalid type", async () => {
		await expect(
			request({
				module: "library",
				method: "create",
				data: {
					slug: `bad-type-${runId}`,
					courseSlug: fixture.courseSlug,
					groupSlug: fixture.groupSlug,
					type: "NOT_A_REAL_TYPE",
					title: "Bad"
				}
			})
		).rejects.toThrow();
	});

	it("updates the article", async () => {
		const updated = await request({
			module: "library",
			method: "update",
			data: { slug: fixture.articleSlug, data: { title: "Renamed Article", status: "PUBLISHED" } }
		});

		expect(updated.title).toBe("Renamed Article");
		expect(updated.status).toBe("PUBLISHED");
	});

	it("rejects update for a nonexistent slug", async () => {
		await expect(
			request({
				module: "library",
				method: "update",
				data: { slug: `nonexistent-${runId}`, data: { title: "x" } }
			})
		).rejects.toThrow();
	});

	it("deletes the player", async () => {
		await request({ module: "library", method: "delete", data: { slug: fixture.playerSlug } });

		const item = await request({ module: "library", method: "get", data: { slug: fixture.playerSlug } });
		expect(item).toBeNull();
	});

	it("rejects delete for a nonexistent slug", async () => {
		await expect(
			request({ module: "library", method: "delete", data: { slug: `nonexistent-${runId}` } })
		).rejects.toThrow();
	});

	afterAll(async () => {
		await destroyCourse(fixture);
	});

});