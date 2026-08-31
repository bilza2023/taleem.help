// /home/bilal-tariq/00--TALEEM/taleem.studio/src/lib/server/utils/requireAdmin.js

import kernel from "taleem-kernel";

export async function requireAdmin(token) {
	if (!token) {
		const err = new Error("Authentication required.");
		err.status = 401;
		throw err;
	}

	try {
		return await kernel.admin.authenticate(token);
	} catch {
		const err = new Error("Invalid or expired token.");
		err.status = 401;
		throw err;
	}
}

export async function requireAdminForCourse(token, courseSlug) {
	const admin = await requireAdmin(token);

	const allowed = await kernel.admin.isAdmin(admin.email, courseSlug);

	if (!allowed) {
		const err = new Error(`Admin is not authorized for course "${courseSlug}".`);
		err.status = 403;
		throw err;
	}

	return admin;
}