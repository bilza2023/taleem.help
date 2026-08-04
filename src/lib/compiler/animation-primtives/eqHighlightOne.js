// /src/compiler/animation-primtives/eqHighlightOne.js

export function eqHighlightOne(
  items
) {
  return items.map(item => {
    const otherLines =
      items
        .filter(
          d => d.id !== item.id
        )
        .map(d => d.id);

    const visibleSp =
      item.spIds || [];

    const hiddenSp =
      items
        .flatMap(
          d => d.spIds || []
        )
        .filter(
          id =>
            !visibleSp.includes(id)
        );

    return {
      time: item.showAt,

      state: {
        focus: [item.id],

        dim: otherLines,

        visible: visibleSp,

        hidden: hiddenSp
      }
    };
  });
}