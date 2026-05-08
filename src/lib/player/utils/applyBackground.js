export function applyBackground(
	el,
	background = {}
) {

	const bgColor =
		background.backgroundColor
		|| "#111111";

	const bgImage =
		background.backgroundImage;

	const opacity =
		background.backgroundImageOpacity
		?? 1;

	// no image
	if (!bgImage) {

		el.style.background =
			bgColor;

		return;
	}

	// 🔥 overlay + image
	el.style.background = `
		linear-gradient(
			rgba(0,0,0,${1 - opacity}),
			rgba(0,0,0,${1 - opacity})
		),
		url("${bgImage}")
	`;

	el.style.backgroundSize =
		"cover";

	el.style.backgroundPosition =
		"center";

	el.style.backgroundRepeat =
		"no-repeat";
}