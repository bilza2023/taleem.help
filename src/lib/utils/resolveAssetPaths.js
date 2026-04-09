/**
 * Resolve image paths in a deck.
 * App-level utility. Mutates deck in place.
 */
export function resolveAssetPaths(deck, IMG_BASE) {
  // -----------------------------
  // background image
  // -----------------------------
  if (
    deck.background?.backgroundImage &&
    typeof deck.background.backgroundImage === "string"
  ) {
    deck.background.backgroundImage =
      IMG_BASE + deck.background.backgroundImage.split("/").pop();
  }

  // -----------------------------
  // slide-level images
  // -----------------------------
  deck.deck.forEach(slide => {
    slide.data?.forEach(item => {
      // normal image slides
      if (item.name === "image" && typeof item.content === "string") {
        item.content = IMG_BASE + item.content.split("/").pop();
      }

      // -----------------------------
      // EQ side-panel images (spImage)
      // -----------------------------
      if (Array.isArray(item.spItems)) {
        item.spItems.forEach(sp => {
          if (sp.type === "spImage" && typeof sp.content === "string") {
            sp.content = IMG_BASE + sp.content.split("/").pop();
          }
        });
      }
    });
  });

  return deck;
}
