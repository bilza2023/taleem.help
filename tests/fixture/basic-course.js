// /home/bilal-tariq/00--TALEEM/taleem.studio/tests/basic-course.js

import { request } from "../../src/lib/server/server.js";

export async function createCourseWithContent(overrides = {}) {
	const runId = Date.now() + Math.floor(Math.random() * 1000);

	const courseSlug = overrides.courseSlug ?? `fixture-course-${runId}`;
	const groupSlug = overrides.groupSlug ?? "group-a";
	const articleSlug = overrides.articleSlug ?? `fixture-article-${runId}`;
	const playerSlug = overrides.playerSlug ?? `fixture-player-${runId}`;

	const course = await request({
		module: "course",
		method: "create",
		data: {
			slug: courseSlug,
			title: overrides.title ?? "Fixture Course",
			access: overrides.access ?? "OPEN"
		}
	});

	const group = await request({
		module: "group",
		method: "create",
		data: { courseSlug, slug: groupSlug, title: "Group A" }
	});

	const article = await request({
		module: "library",
		method: "create",
		data: {
			slug: articleSlug, courseSlug, groupSlug,
			type: "ARTICLE", title: "Fixture Article",
			status: overrides.status ?? "DRAFT"
		}
	});

	const player = await request({
		module: "library",
		method: "create",
		data: {
			slug: playerSlug, courseSlug, groupSlug,
			type: "PLAYER", title: "Fixture Player",
			status: overrides.status ?? "DRAFT"
		}
	});

	return { courseSlug, groupSlug, articleSlug, playerSlug, course, group, article, player };
}

export async function destroyCourse({ courseSlug, groupSlug, articleSlug, playerSlug }) {
	await request({ module: "library", method: "delete", data: { slug: articleSlug } }).catch(() => {});
	await request({ module: "library", method: "delete", data: { slug: playerSlug } }).catch(() => {});
	await request({ module: "group", method: "delete", data: { courseSlug, groupSlug } }).catch(() => {});
	await request({ module: "course", method: "delete", data: { slug: courseSlug } }).catch(() => {});
}