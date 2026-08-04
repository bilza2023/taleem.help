
// /src/compiler/templates/compileTitleAndSubtitle.js

import { addIdToItems } from "./helpers/addIdToItems.js";

export function compileTitleAndSubtitle(
  slide
) {
  const rawItems =
    slide.data ?? [];

  if (!rawItems.length) {
    throw new Error(
      "titleAndSubtitle: requires title"
    );
  }

  const items =
    addIdToItems(rawItems);

  const titleItem =
    items.find(
      d => d.name === "title"
    );

  const subtitleItem =
    items.find(
      d => d.name === "subtitle"
    );

  if (!titleItem) {
    throw new Error(
      "titleAndSubtitle: requires title"
    );
  }

  const ids =
    items.map(i => i.id);

  const html = `
    <section class="slide titleAndSubtitle">

      <h1
        id="${titleItem.id}"

        class="
          hidden
          taleem-heading-lg
          ${titleItem.classes || ""}
        "
      >
        ${titleItem.content}
      </h1>

      ${
        subtitleItem
          ? `
            <h2
              id="${subtitleItem.id}"

              class="
                hidden
                taleem-heading-md
                ${subtitleItem.classes || ""}
              "
            >
              ${subtitleItem.content}
            </h2>
          `
          : ""
      }

    </section>
  `;

  return {
    html,

    animation:
      "progressiveReveal",

    ids
  };
}