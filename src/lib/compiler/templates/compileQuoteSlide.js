// /src/compiler/templates/compileQuoteSlide.js

import { addIdToItems } from "./helpers/addIdToItems.js";

export function compileQuoteSlide(slide) {
  const rawItems = slide.data ?? [];

  const items =
    addIdToItems(rawItems);

  const quoteItem =
    items.find(
      d => d.name === "quote"
    );

  const authorItem =
    items.find(
      d => d.name === "author"
    );

  if (!quoteItem) {
    throw new Error(
      "quoteSlide: requires quote"
    );
  }

  const ids =
    items.map(i => i.id);

  const html = `
    <blockquote class="slide quoteSlide">

      <p
        id="${quoteItem.id}"

        class="
          hidden
          ${quoteItem.classes || ""}
        "
      >
        ${quoteItem.content}
      </p>

      ${
        authorItem
          ? `
            <footer
              id="${authorItem.id}"

              class="
                hidden
                ${authorItem.classes || ""}
              "
            >
              ${authorItem.content}
            </footer>
          `
          : ""
      }

    </blockquote>
  `;

  return {
    html,

    animation:
      "progressiveReveal",

    ids
  };
}