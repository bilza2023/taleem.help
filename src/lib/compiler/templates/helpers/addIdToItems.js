
let __idCounter = 0;

export function addIdToItems(items) {
  if (!Array.isArray(items)) return [];

  return items.map(item => {
    __idCounter++;

    const id = `i${Date.now().toString(36)}${__idCounter.toString(36)}`;

    return {
      ...item,
      id
    };
  });
}