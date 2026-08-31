// /home/bilal-tariq/00--TALEEM/taleem.studio/tests/course.test.js

import { describe, it, expect, afterAll } from "vitest";
import { request } from "../src/lib/server/server.js";

const runId = Date.now();
const courseSlug = `studio-course-${runId}`;

describe("Story: course CRUD via server.js dispatcher", () => {

	it("creates a course", async () => {
		const course = await request({
			module: "course",
			method: "create",
			data: { slug: courseSlug, title: "Studio Course", access: "OPEN" }
		});

		expect(course.slug).toBe(courseSlug);
		expect(course.access).toBe("OPEN");
	});

	it("gets the course by slug", async () => {
		const course = await request({
			module: "course",
			method: "get",
			data: { slug: courseSlug }
		});

		expect(course.slug).toBe(courseSlug);
	});

	it("lists courses including the new one", async () => {
		const courses = await request({
			module: "course",
			method: "list",
			data: {}
		});

		expect(courses.some(c => c.slug === courseSlug)).toBe(true);
	});

	it("updates the course", async () => {
		const updated = await request({
			module: "course",
			method: "update",
			data: { slug: courseSlug, data: { title: "Renamed Studio Course" } }
		});

		expect(updated.title).toBe("Renamed Studio Course");
	});

	it("rejects update for a nonexistent slug", async () => {
		await expect(
			request({
				module: "course",
				method: "update",
				data: { slug: `nonexistent-${runId}`, data: { title: "x" } }
			})
		).rejects.toThrow();
	});

	it("rejects an unknown module", async () => {
		await expect(
			request({ module: "nope", method: "list", data: {} })
		).rejects.toThrow("Unknown module: nope");
	});

	it("rejects an unknown method on a valid module", async () => {
		await expect(
			request({ module: "course", method: "nope", data: {} })
		).rejects.toThrow("Method not implemented: course.nope");
	});

	it("deletes the course", async () => {
		await request({ module: "course", method: "delete", data: { slug: courseSlug } });

		const course = await request({ module: "course", method: "get", data: { slug: courseSlug } });
		expect(course).toBeNull();
	});

	afterAll(async () => {
		await request({ module: "course", method: "delete", data: { slug: courseSlug } }).catch(() => {});
	});

});