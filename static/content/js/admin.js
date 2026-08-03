const TOKEN_KEY = "taleem-server-token";

const admin = {

	isLoggedIn() {

		return !!localStorage.getItem(TOKEN_KEY);

	},

	verify() {

		return this.isLoggedIn();

	},

	getToken() {

		return localStorage.getItem(TOKEN_KEY);

	},

	setToken(token) {

		localStorage.setItem(
			TOKEN_KEY,
			token
		);

	},

	clearToken() {

		localStorage.removeItem(
			TOKEN_KEY
		);

	},

	logout() {

		this.clearToken();

		location.href = "/api/admin/login";

	}

};

export default admin;