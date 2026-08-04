export function patchDeckV1(deck) {
    return {
      version: deck.version || "deck-v1",
  
      name: deck.name,
  
      background: deck.background || {
        backgroundColor: "#111111",
        backgroundImage: null,
        backgroundImageOpacity: 0.3
      },
  
      audio: deck.audio,
  
      deck: deck.deck || []
    };
  }