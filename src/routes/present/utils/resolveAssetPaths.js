// /src/routes/player/utils/resolveAssetPaths.js

export function resolveAssetPaths(
	presentation,
	ASSET_BASE
) {

	if (!presentation) return presentation;

	const assetBase =
		ASSET_BASE.endsWith("/")
			? ASSET_BASE
			: `${ASSET_BASE}/`;

	function resolveImagePath(src) {

		if (
			!src ||
			typeof src !== "string"
		) {
			return src;
		}

		if (
			src.startsWith("http://")
			||
			src.startsWith("https://")
			||
			src.startsWith("data:")
			||
			src.startsWith("blob:")
		) {
			return src;
		}

		if (
			src.startsWith(assetBase)
		) {
			return src;
		}

		if (
			src.startsWith("/content/")
		) {
			return src;
		}

		if (
			src.startsWith("/images/")
		) {
			return (
				assetBase +
				src.slice(
					"/images/".length
				)
			);
		}

		if (
			src.startsWith("/")
		) {
			return (
				assetBase +
				src.slice(1)
			);
		}

		return assetBase + src;
	}

	// --------------------------------------------------
	// background image
	// --------------------------------------------------

	if (
		presentation.background
			?.backgroundImage
	) {
		presentation.background.backgroundImage =
			resolveImagePath(
				presentation
					.background
					.backgroundImage
			);
	}

	// --------------------------------------------------
	// slide html images
	// --------------------------------------------------

	for (const slide of presentation.deck ?? []) {

		if (!slide.html) continue;

		slide.html =
			slide.html.replace(

				/src="([^"]+)"/g,

				(match, src) => {

					return `src="${resolveImagePath(src)}"`;
				}
			);
	}

	return presentation;
}
