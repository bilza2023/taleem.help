
/**
 * Resolve background assets for a deck.
 * App-level utility. Mutates deck in place.
 *
 * @param {object} deck - deck-v1 object
 * @param {string} ASSET_BASE - base path for assets (e.g. "/images/")
 */
export function resolveBackground(deck, ASSET_BASE) {
    if (!deck || !deck.background) return deck;
  
    const bg = deck.background;
  
    if (
      typeof bg.backgroundImage === "string" &&
      bg.backgroundImage.length > 0
    ) {
      bg.backgroundImage =
        ASSET_BASE + bg.backgroundImage.split("/").pop();
    }
  
    // defaults (defensive, not opinionated)
    if (bg.backgroundImageOpacity === undefined) {
      bg.backgroundImageOpacity = 1;
    }
  
    return deck;
  }
  