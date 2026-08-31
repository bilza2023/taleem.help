// /home/bilal-tariq/00--TALEEM/taleem.studio/tests/group.test.js

import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { request } from "../src/lib/server/server.js";

const runId = Date.now();
const courseSlug = `studio-group-course-${runId}`;
const groupSlug = "group-a";

describe("Story: group CRUD via server.js dispatcher", () => {

	beforeAll(async () => {
		// group is scoped under a course — create the parent first
		await request({
			module: "course",
			method: "create",
			data: { slug: courseSlug, title: "Group Test Course", access: "OPEN" }
		});
	});

	it("creates a group under the course", async () => {
		const group = await request({
			module: "group",
			method: "create",
			data: { courseSlug, slug: groupSlug, title: "Group A" }
		});

		expect(group.courseSlug).toBe(courseSlug);
		expect(group.slug).toBe(groupSlug);
	});

	it("gets the group by compound key", async () => {
		const group = await request({
			module: "group",
			method: "get",
			data: { courseSlug, groupSlug }
		});

		expect(group.slug).toBe(groupSlug);
	});

	it("lists groups for the course including the new one", async () => {
		const groups = await request({
			module: "group",
			method: "list",
			data: { courseSlug }
		});

		expect(groups.some(g => g.slug === groupSlug)).toBe(true);
	});

	it("updates the group", async () => {
		const updated = await request({
			module: "group",
			method: "update",
			data: { courseSlug, groupSlug, data: { title: "Renamed Group A" } }
		});

		expect(updated.title).toBe("Renamed Group A");
	});

	it("rejects update for a nonexistent group", async () => {
		await expect(
			request({
				module: "group",
				method: "update",
				data: { courseSlug, groupSlug: `nonexistent-${runId}`, data: { title: "x" } }
			})
		).rejects.toThrow();
	});

	it("deletes the group", async () => {
		await request({ module: "group", method: "delete", data: { courseSlug, groupSlug } });

		const group = await request({ module: "group", method: "get", data: { courseSlug, groupSlug } });
		expect(group).toBeNull();
	});

	afterAll(async () => {
		await request({ module: "group", method: "delete", data: { courseSlug, groupSlug } }).catch(() => {});
		await request({ module: "course", method: "delete", data: { slug: courseSlug } }).catch(() => {});
	});

});