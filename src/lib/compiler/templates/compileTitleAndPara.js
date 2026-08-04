
// /src/compiler/templates/compileTitleAndPara.js

import { addIdToItems } from "./helpers/addIdToItems.js";

export function compileTitleAndPara(slide) {
  const rawItems = slide.data ?? [];

  if (!rawItems.length) {
    throw new Error(
      "titleAndPara: requires data"
    );
  }

  const items =
    addIdToItems(rawItems);

  const titleItem =
    items.find(
      d => d.name === "title"
    );

  const paraItem =
    items.find(
      d => d.name === "para"
    );

  if (!paraItem) {
    throw new Error(
      "titleAndPara: requires para"
    );
  }

  const ids =
    items.map(i => i.id);

  const html = `
    <section class="slide titleAndPara">

      ${
        titleItem
          ? `
            <h1
              id="${titleItem.id}"

              class="
                hidden
                taleem-heading-md
              "
            >
              ${titleItem.content}
            </h1>
          `
          : ""
      }

      <p
        id="${paraItem.id}"

        class="
          hidden
          taleem-para
        "
      >
        ${paraItem.content}
      </p>

    </section>
  `;

  return {
    html,

    animation:
      "progressiveReveal",

    ids
  };
}