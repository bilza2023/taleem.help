
// content/js/getToken.js

export default function getToken(req) {

	const authorization = req.headers.authorization;

	if (!authorization) {

		throw new Error("Missing Authorization header.");

	}

	if (!authorization.startsWith("Bearer ")) {

		throw new Error("Invalid Authorization header.");

	}

	return authorization.substring(7);

}