// /src/lib/player/utils/applyBackground.js

export function applyBackground(
	el,
	background = {}
) {

	if (!el) {
		return;
	}

	const bgColor =
		background.backgroundColor
		|| "#111111";

	const bgImage =
		background.backgroundImage;

	const imageOpacity =
		Number(
			background.backgroundImageOpacity
			?? 1
		);

	const opacity =
		Number.isFinite(imageOpacity)
			? Math.min(
				1,
				Math.max(
					0,
					imageOpacity
				)
			)
			: 1;

	// --------------------------------------------------
	// no image
	// --------------------------------------------------

	if (
		!bgImage ||
		typeof bgImage !== "string"
	) {

		el.style.backgroundColor =
			bgColor;

		el.style.backgroundImage =
			"none";

		return;
	}

	// --------------------------------------------------
	// image + overlay
	// --------------------------------------------------

	const safeBgImage =
		bgImage.replaceAll(
			'"',
			'\\"'
		);

	el.style.backgroundColor =
		bgColor;

	el.style.backgroundImage =
		`linear-gradient(rgba(0,0,0,${1 - opacity}), rgba(0,0,0,${1 - opacity})), url("${safeBgImage}")`;

	el.style.backgroundSize =
		"cover, cover";

	el.style.backgroundPosition =
		"center, center";

	el.style.backgroundRepeat =
		"no-repeat, no-repeat";
}
