/**
 * Resolve background assets for a deck.
 * App-level utility. Mutates deck in place.
 *
 * @param {object} deck
 * @param {string} ASSET_BASE
 */

export function resolveBackground(
	deck,
	ASSET_BASE
) {

	if (
		!deck ||
		!deck.background
	) {
		return deck;
	}

	const bg =
		deck.background;

	// ---------------------------------
	// resolve image
	// ---------------------------------

	if (
		typeof bg.backgroundImage
		=== "string" &&

		bg.backgroundImage
			.length > 0
	) {

		// already absolute
		if (
			!bg.backgroundImage
				.startsWith("/")
		) {

			bg.backgroundImage =
				ASSET_BASE +
				bg.backgroundImage;
		}
	}

	// ---------------------------------
	// defaults
	// ---------------------------------

	if (
		bg.backgroundImageOpacity
		=== undefined
	) {

		bg.backgroundImageOpacity =
			1;
	}

	return deck;
}