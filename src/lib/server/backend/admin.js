// /home/bilal-tariq/00--TALEEM/taleem.studio/src/lib/server/admin.js

import kernel from "taleem-kernel";

export async function loginAdmin(email, password) {
	return kernel.admin.login(email, password);
}

export async function authenticateAdmin(token) {
	if (!token) return null;
	return kernel.admin.authenticate(token);
}

export async function authorizeAdmin(email, courseSlug) {
	return kernel.admin.isAdmin(email, courseSlug);
}