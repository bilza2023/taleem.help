// /home/bilal-tariq/00--TALEEM/taleem.studio/src/lib/server/course.js

import kernel from "taleem-kernel";

export async function listCourses(filters) {
	return kernel.course.list(filters);
}

export async function getCourse(slug) {
	return kernel.course.get(slug);
}

export async function createCourse(data) {
	return kernel.course.create(data);
}

export async function updateCourse(slug, data) {
	const existing = await kernel.course.get(slug);

	if (!existing) {
		const err = new Error(`Course "${slug}" not found.`);
		err.status = 404;
		throw err;
	}

	return kernel.course.update(slug, data);
}

export async function deleteCourse(slug) {
	const existing = await kernel.course.get(slug);

	if (!existing) {
		const err = new Error(`Course "${slug}" not found.`);
		err.status = 404;
		throw err;
	}

	return kernel.course.delete(slug);
}

export async function authorizeCourse(userId, courseSlug) {
	return kernel.course.authorize(userId, courseSlug);
}