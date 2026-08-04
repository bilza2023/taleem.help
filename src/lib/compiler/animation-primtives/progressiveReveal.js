
// /src/compiler/animation-primitives/progressiveReveal.js

export function progressiveReveal(items) {
  const ids = items.map(item => item.id);

  return items.map((item, index) => ({
    time: item.showAt,

    state: {
      hidden: ids.slice(index + 1)
    }
  }));
}