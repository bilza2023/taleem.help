// src/utils/assignMockTimings.js

/**
 * Compile a golden / browser-ready deck into a player-ready deck
 * by assigning mock absolute timings.
 *
 * @param {object} goldenDeck - deck object with a `deck` array
 * @param {number} slideDuration - seconds per slide (default: 5)
 * @returns {object} player-ready deck
 */
export function assignMockTimings(goldenDeck, slideDuration = 5) {
  if (
    !goldenDeck ||
    !Array.isArray(goldenDeck.deck) ||
    typeof slideDuration !== "number"
  ) {
    throw new Error("assignMockTimings: invalid deck or slideDuration");
  }

  let currentTime = 0;

  const deckWithTimings = {
    ...goldenDeck,
    deck: goldenDeck.deck.map(slide => {
      const start = currentTime;
      const end = start + slideDuration;
      currentTime = end;

      const data = Array.isArray(slide.data)
        ? slide.data.map(item => ({
            ...item,
            showAt:
              start + (typeof item.showAt === "number" ? item.showAt : 0)
          }))
        : slide.data;

      return {
        ...slide,
        start,
        end,
        data
      };
    })
  };

  return deckWithTimings;
}
