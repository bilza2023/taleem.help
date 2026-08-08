

// /src/routes/player/js/resolveAssetPaths.js

import {
	ContentType,
	EqSidePanelType
} from "$lib/taleem-specs/enums";

export function resolveAssetPaths(
	deck,
	ASSET_BASE
) {

	if (!deck) return deck;

	const assetBase =
		ASSET_BASE.endsWith("/")
			? ASSET_BASE
			: `${ASSET_BASE}/`;

	function resolvePath(src) {

		if (
			!src ||
			typeof src !== "string"
		) {
			return src;
		}

		if (
			src.startsWith("http://") ||
			src.startsWith("https://") ||
			src.startsWith("data:") ||
			src.startsWith("blob:")
		) {
			return src;
		}

		if (
			src.startsWith(assetBase) ||
			src.startsWith("/content/")
		) {
			return src;
		}

		if (
			src.startsWith("/images/")
		) {
			return (
				assetBase +
				src.slice("/images/".length)
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

	// ------------------------------------------
	// background
	// ------------------------------------------

	if (
		deck.background?.backgroundImage
	) {
		deck.background.backgroundImage =
			resolvePath(
				deck.background.backgroundImage
			);
	}

	// ------------------------------------------
	// slide images
	// ------------------------------------------

	for (const slide of deck.deck ?? []) {

		for (const item of slide.data ?? []) {

			// normal image components
			if (
				item?.name === ContentType.IMAGE
			) {

				item.content =
					resolvePath(
						item.content
					);

			}

			// EQ side-panel images
			if (
				Array.isArray(item?.spItems)
			) {

				for (const spItem of item.spItems) {

					if (
						spItem.type === EqSidePanelType.IMAGE
					) {

						spItem.content =
							resolvePath(
								spItem.content
							);

					}

				}

			}

		}

	}

	return deck;

}