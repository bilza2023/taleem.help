// /home/bilal-tariq/00--TALEEM/taleem.studio/src/lib/server/backend.js

import { registerUser,loginUser,authenticateUser } from "./user.js";
import { getAudio, listAudio, } from "./audio.js";
import {listCourses, getCourse} from "./course.js";
import {listGroups, getGroup, } from "./group.js";
import { getImage, listImages } from "./image.js";
import {getLibrary, listLibrary, listLibraryByGroup
} from "./library.js";

import { getSvg, listSvg, } from "./svg.js";

export const backend = {

	// admin: {
	// 	login: (data) => loginAdmin(data.email, data.password),
	// 	authenticate: (data, token) => authenticateAdmin(token),
	// 	authorize: (data) => authorizeAdmin(data.email, data.courseSlug)
	// },
	user: {
	register: (data) => registerUser(data),
	login: (data) => loginUser(data.email, data.password),
	authenticate: (data, token) => authenticateUser(token)
	},

	// assets: {
	// 	list: (data, token) => listAssets(token)
	// },

	audio: {
		get: (data) => getAudio(data.slug),
		list: (data) => listAudio(data),
		// create: (data, token) => createAudio(data, token),
		// update: (data, token) => updateAudio(data.slug, data.data, token),
		// delete: (data, token) => deleteAudio(data.slug, token)
	},

	course: {
		list: (data) => listCourses(data),
		get: (data) => getCourse(data.slug),
		// create: (data) => createCourse(data),
		// update: (data) => updateCourse(data.slug, data.data),
		// delete: (data) => deleteCourse(data.slug)
	},

	group: {
		list: (data) => listGroups(data.courseSlug),
		get: (data) => getGroup(data.courseSlug, data.groupSlug),
		// create: (data, token) => createGroup(data, token),
		// update: (data, token) => updateGroup(data.courseSlug, data.groupSlug, data.data, token),
		// delete: (data, token) => deleteGroup(data.courseSlug, data.groupSlug, token)
	},

	image: {
		get: (data) => getImage(data.slug),
		list: (data) => listImages(data),
		// create: (data, token) => createImage(data, token),
		// update: (data, token) => updateImage(data.slug, data.data, token),
		// delete: (data, token) => deleteImage(data.slug, token)
	},

	library: {
		get: (data) => getLibrary(data.slug),
		list: (data) => listLibrary(data),
		// create: (data) => createLibrary(data),
		// update: (data) => updateLibrary(data.slug, data.data),
		// delete: (data) => deleteLibrary(data.slug),
		listByGroup: (data) => listLibraryByGroup(data.courseSlug, data.groupSlug)
	},

	svg: {
		get: (data) => getSvg(data.slug),
		list: (data) => listSvg(data),
		// create: (data, token) => createSvg(data, token),
		// update: (data, token) => updateSvg(data.slug, data.data, token),
		// delete: (data, token) => deleteSvg(data.slug, token)
	}
};