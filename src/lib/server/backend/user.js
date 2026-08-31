// src/lib/server/user.js
import kernel from "taleem-kernel";

export async function registerUser(data) {
	const { email, password, name } = data;
	return kernel.user.register({ email, password, name });
}

export async function loginUser(email, password) {
	return kernel.user.login(email, password);
}

export async function authenticateUser(token) {
	if (!token) return null;
	return kernel.user.authenticate(token);
}