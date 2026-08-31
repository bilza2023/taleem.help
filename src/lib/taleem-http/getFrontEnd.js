// /home/bilal-tariq/00--TALEEM/taleem.studio/src/lib/taleem-http/getFrontEnd.js

export function getFrontEnd(modules) {
	const frontend = {};
	const methods = ["get", "post", "put", "patch", "delete"];

	for (const module of modules) {
		frontend[module] = {};

		for (const method of methods) {
			frontend[module][method] = async (data = {}) => {
				let url = "/api/server";
				const options = {
					method: method.toUpperCase(),
					headers: {}
				};

				if (method === "get") {
					const params = new URLSearchParams({
						module,
						data: JSON.stringify(data)
					});
					url += `?${params}`;
				} else {
					options.headers["Content-Type"] = "application/json";
					options.body = JSON.stringify({ module, data });
				}

				const response = await fetch(url, options);
				const contentType = response.headers.get("content-type") || "";
				const result = contentType.includes("application/json")
					? await response.json()
					: await response.text();

				if (!response.ok) {
					throw new Error(
						result?.error ||
						result?.message ||
						`HTTP ${response.status}`
					);
				}

				return result;
			};
		}
	}

	return frontend;
}