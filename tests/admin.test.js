// /home/bilal-tariq/00--TALEEM/taleem.studio/tests/admin.test.js

import { describe, it, expect, afterAll } from "vitest";
import kernel from "taleem-kernel";
import { request } from "../src/lib/server/server.js";

const runId = Date.now();
const courseSlug = `studio-admin-course-${runId}`;
const adminEmail = `studio-admin-${runId}@example.com`;
const adminPassword = "test-password";

describe("Story: admin login/authenticate/authorize via server.js dispatcher", () => {
	let token;

	it("seeds an admin scoped to one course (backend.js has no admin.create route yet)", async () => {
		const admin = await kernel.admin.create({
			email: adminEmail,
			password: adminPassword,
			courseSlugs: JSON.stringify([courseSlug])
		});

		expect(admin.email).toBe(adminEmail);
	});

	it("logs the admin in via the dispatcher and returns a token", async () => {
		token = await request({
			module: "admin",
			method: "login",
			data: { email: adminEmail, password: adminPassword }
		});

		expect(typeof token).toBe("string");
	});

	it("authenticates using the bearer token, not data.token", async () => {
		const admin = await request({
			module: "admin",
			method: "authenticate",
			data: {},
			token
		});

		expect(admin.email).toBe(adminEmail);
	});

	it("authorizes the admin for their assigned course", async () => {
		const allowed = await request({
			module: "admin",
			method: "authorize",
			data: { email: adminEmail, courseSlug }
		});

		expect(allowed).toBe(true);
	});

	it("denies the admin for a course they are not assigned to", async () => {
		const allowed = await request({
			module: "admin",
			method: "authorize",
			data: { email: adminEmail, courseSlug: `other-${runId}` }
		});

		expect(allowed).toBe(false);
	});

	it("rejects login with the wrong password", async () => {
		await expect(
			request({
				module: "admin",
				method: "login",
				data: { email: adminEmail, password: "wrong-password" }
			})
		).rejects.toThrow();
	});

	afterAll(async () => {
		await kernel.db.admin.delete({ where: { email: adminEmail } }).catch(() => {});
	});

});