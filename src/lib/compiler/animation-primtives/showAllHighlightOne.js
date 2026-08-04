
// /src/compiler/animation-primitives/showAllHighlightOne.js

export function showAllHighlightOne(items, extraStateFn) {
  const ids = items.map(item => item.id);

  const actions = [];

  for (const item of items) {
    const focusId = item.id;

    const dimIds = ids.filter(id => id !== focusId);

    const baseState = {
      focus: [focusId],
      dim: dimIds
    };

    const extraState = extraStateFn
      ? extraStateFn(focusId, items)
      : {};

    actions.push({
      time: item.showAt,

      state: {
        ...baseState,
        ...extraState
      }
    });
  }

  return actions;
}