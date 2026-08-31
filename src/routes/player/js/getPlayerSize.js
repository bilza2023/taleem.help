// /src/routes/player/js/getPlayerSize.js

export function getPlayerSize() {

	const controlsHeight = 52;

	const availableWidth = window.innerWidth;
	const availableHeight = window.innerHeight - controlsHeight;

	const aspect = 16 / 9;

	let width = availableWidth;
	let height = Math.round(width / aspect);

	if (height > availableHeight) {

		height = availableHeight;
		width = Math.round(height * aspect);

	}

	return {
		width,
		height
	};

}