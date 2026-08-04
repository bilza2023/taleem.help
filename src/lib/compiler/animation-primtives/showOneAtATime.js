// /src/compiler/animation-primitives/showOneAtATime.js

export function showOneAtATime(items) {
  const ids = items.map(item => item.id);

  const actions = [];

  for (const item of items) {
    const activeId = item.id;

    const hiddenIds = ids.filter(id => id !== activeId);

    actions.push({
      time: item.showAt,

      state: {
        visible: [activeId],
        hidden: hiddenIds
      }
    });
  }

  return actions;
}