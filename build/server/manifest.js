const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fbise10math/fbise10math.js","fbise10math/images/thumbnail.png","fbise9english/images/thumbnail.png","fbise9math/images/thumbnail.png","fbise9mathOld/chapterLinks_1.js","fbise9mathOld/chapterLinks_2.js","fbise9mathOld/chapterLinks_3.js","fbise9mathOld/chapterLinks_4.js","fbise9mathOld/fbise9math.js","fbise9mathOld/images/1.6q2.png","fbise9mathOld/images/8.1-q2-p-1.png","fbise9mathOld/images/8.1-q2-p-2.png","fbise9mathOld/images/8.1-q2-p-3.png","fbise9mathOld/images/8.1-q2-p-5.png","fbise9mathOld/images/ex4.1-q2_matrix_multiplication.png","fbise9mathOld/images/multiplication_step-0.png","fbise9mathOld/images/multiplication_step-01.png","fbise9mathOld/images/multiplication_step-02.png","fbise9mathOld/images/multiplication_step-03.png","fbise9mathOld/images/multiplication_step-04.png","fbise9mathOld/images/text2-4-8-6.png","fbise9mathOld/images/theorem10.1.1.png","fbise9mathOld/images/theorem10.1.2.png","fbise9mathOld/images/thumbnail.png","fbise9mathOld/test.mp3","mathImages/1920x1080.png","mathImages/bg.png","mathImages/chemistry_10thFBSIE.png","mathImages/chemistry_9thFBSIE.png","mathImages/female.png","mathImages/female2.png","mathImages/graph.png","mathImages/male.png","mathImages/math.png","mathImages/math_10thFBSIE.png","mathImages/math_8thFBSIE.png","mathImages/math_9thFBSIE.png","mathImages/physics_10thFBSIE.png","mathImages/physics_9thFBSIE.png","mathImages/potrate.jpg","mathImages/theorem10.1.2.png","mathImages/urdu_10thFBSIE.png","mathImages/urdu_8thFBSIE.png","mathImages/urdu_9thFBSIE.png","sprites/alphabets.png","sprites/figs.png","sprites/leafs.png","sprites/people.png","sprites/students.png","system_images/bg_images/black_board.jpg","system_images/bg_images/black_board_mat.jpg","system_images/bg_images/black_mat.jpg","system_images/bg_images/blue_waves.jpg","system_images/bg_images/brown_stone.jpg","system_images/bg_images/design_old.jpg","system_images/bg_images/drywall.jpg","system_images/bg_images/granite.jpg","system_images/bg_images/gray_marble.jpg","system_images/bg_images/gray_stone.jpg","system_images/bg_images/paper01.jpg","system_images/bg_images/tinted.jpg","system_images/bg_images/wall.jpg","system_images/bg_images/white_mat.jpg","system_images/bg_images/wood.jpg","system_images/gen/atom.png","system_images/gen/black_board.jpg","system_images/gen/carbon-atom.png","system_images/gen/helium-atom.png","system_images/gen/hydrongen-atom.png","system_images/gen/oxygen-atom.png","system_images/gen/people.png","system_images/gen/solarsystem.jpg","system_images/gen/test.png","system_images/gen/wood.jpg"]),
	mimeTypes: {".png":"image/png",".js":"text/javascript",".mp3":"audio/mpeg",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.edQWou0B.js","app":"_app/immutable/entry/app.sg6K7_Dw.js","imports":["_app/immutable/entry/start.edQWou0B.js","_app/immutable/chunks/entry.MzKmVToJ.js","_app/immutable/chunks/scheduler.RwmvnsSZ.js","_app/immutable/chunks/index.G5RwReMg.js","_app/immutable/entry/app.sg6K7_Dw.js","_app/immutable/chunks/scheduler.RwmvnsSZ.js","_app/immutable/chunks/index.AhbQXMAj.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-_ac1PA1V.js')),
			__memo(() => import('./chunks/1-1NcwidAv.js')),
			__memo(() => import('./chunks/2-2PNQ4NyQ.js')),
			__memo(() => import('./chunks/3-s1KSSff0.js')),
			__memo(() => import('./chunks/4-nc0M7U-j.js')),
			__memo(() => import('./chunks/5-p3X3TJ-c.js')),
			__memo(() => import('./chunks/6-aTnW7Yp0.js')),
			__memo(() => import('./chunks/7-WIdZcy73.js')),
			__memo(() => import('./chunks/8-ivzxa1A_.js')),
			__memo(() => import('./chunks/9-eJ7fWm67.js')),
			__memo(() => import('./chunks/10-DmyIN4uU.js')),
			__memo(() => import('./chunks/11-mxniGNo2.js')),
			__memo(() => import('./chunks/12-McaIuJG3.js')),
			__memo(() => import('./chunks/13-ca0VKt2g.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/app/matrix",
				pattern: /^\/app\/matrix\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/blog/dockers",
				pattern: /^\/blog\/dockers\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/blog/taleem",
				pattern: /^\/blog\/taleem\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/change_forgot_password",
				pattern: /^\/change_forgot_password\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/forgot_password",
				pattern: /^\/forgot_password\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/payment",
				pattern: /^\/payment\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/syllabus",
				pattern: /^\/syllabus\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/verify",
				pattern: /^\/verify\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
