// getDeckImages.js

export function getDeckImages(deck) {
    const images = new Set();
  
    // -----------------------------
    // background image
    // -----------------------------
    if (
      deck.background?.backgroundImage &&
      typeof deck.background.backgroundImage === "string"
    ) {
      images.add(deck.background.backgroundImage.split("/").pop());
    }
  
    // -----------------------------
    // slide-level images
    // -----------------------------
    if (!Array.isArray(deck.deck)) return [];
  
    deck.deck.forEach(slide => {
      slide.data?.forEach(item => {
        // normal image
        if (item.name === "image" && typeof item.content === "string") {
          images.add(item.content.split("/").pop());
        }
  
        // EQ side panel spImage
        if (Array.isArray(item.spItems)) {
          item.spItems.forEach(sp => {
            if (sp.type === "spImage" && typeof sp.content === "string") {
              images.add(sp.content.split("/").pop());
            }
          });
        }
      });
    });
  
    return Array.from(images);
  }