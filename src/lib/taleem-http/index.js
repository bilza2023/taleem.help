// /home/bilal-tariq/00--TALEEM/taleem.studio/src/lib/taleem-http/TaleemHttp.js
import { getFrontEnd } from "./getFrontEnd.js";
export class TaleemHttp {
	constructor(modules) {
		this.modules = modules;
		this.routes = {};
		this.namedRoutes = {};
		this.specialRoutes = {};
		this.beforeEachHooks = [];
		this.beforeModuleHooks = {};
		this.backend = {};
		this.frontend = {};

		for (const module of modules) {
			this.backend[module] = {};
			this.frontend[module] = {};
		}
	}

	addBeforeEach(fn) {
		this.beforeEachHooks.push(fn);
	}

	addBeforeModule(module, fn) {
		this.#checkModule(module);

		if (!this.beforeModuleHooks[module]) {
			this.beforeModuleHooks[module] = [];
		}

		this.beforeModuleHooks[module].push(fn);
	}

	addRoute(module, method, handler, preHook = null) {
		this.#checkModule(module);

		if (!this.routes[module]) {
			this.routes[module] = {};
		}

		this.routes[module][method] = { handler, preHook };

		this.backend[module][method] = async data => {
			return handler(data);
		};

		this.frontend[module][method] = data => {
			return this.request(module, method, data);
		};
	}

	addNamedRoute(module, name, handler, preHook = null) {
		this.#checkModule(module);

		if (!this.namedRoutes[module]) {
			this.namedRoutes[module] = {};
		}

		this.namedRoutes[module][name] = { handler, preHook };

		this.backend[module][name] = async data => {
			return handler(data);
		};

		this.frontend[module][name] = data => {
			return this.request(module, name, data);
		};
	}

	addSpecialRoute(name, handler, preHook = null) {
		this.specialRoutes[name] = { handler, preHook };
		this.backend[name] = async data => {
			return handler(data);
		};
	}

getFrontEnd() {
	return getFrontEnd(this.modules);
}

	getBackEnd() {
		return this.backend;
	}

	async request(module, method, data = {}) {
		throw new Error("HTTP transport not implemented yet.");
	}

	async handle(request) {
		throw new Error("HTTP server handler not implemented yet.");
	}

	#checkModule(module) {
		if (!this.modules.includes(module)) {
			throw new Error(`Unknown module: ${module}`);
		}
	}
}