import kernel from "taleem-kernel";
import { requireAdminForCourse } from "./utils/requireAdmin.js";

export async function listGroups(courseSlug) {
	return kernel.group.listByCourse(courseSlug);
}

export async function getGroup(courseSlug, groupSlug) {
	return kernel.group.get(courseSlug, groupSlug);
}

export async function createGroup(data, token) {
	await requireAdminForCourse(token, data.courseSlug);
	return kernel.group.create(data);
}

export async function updateGroup(courseSlug, groupSlug, data, token) {
	await requireAdminForCourse(token, courseSlug);

	const existing = await kernel.group.get(courseSlug, groupSlug);
	if (!existing) {
		const err = new Error(`Group "${groupSlug}" not found in course "${courseSlug}".`);
		err.status = 404;
		throw err;
	}

	return kernel.group.update(courseSlug, groupSlug, data);
}

export async function deleteGroup(courseSlug, groupSlug, token) {
	await requireAdminForCourse(token, courseSlug);

	const existing = await kernel.group.get(courseSlug, groupSlug);
	if (!existing) {
		const err = new Error(`Group "${groupSlug}" not found in course "${courseSlug}".`);
		err.status = 404;
		throw err;
	}

	return kernel.group.delete(courseSlug, groupSlug);
}