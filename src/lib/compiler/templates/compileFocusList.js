// /src/compiler/templates/compileFocusList.js

import { addIdToItems } from "./helpers/addIdToItems.js";

export function compileFocusList(slide) {
  const rawItems = slide.data ?? [];

  const items = addIdToItems(rawItems);

  const bullets =
    items.filter(
      d => d.name === "bullet"
    );

  const headingItem =
    items.find(
      d => d.name === "heading"
    );

  if (!bullets.length) {
    throw new Error(
      "focusList: requires bullets"
    );
  }

  const ids =
    items.map(i => i.id);

  const html = `
    <section class="slide focusList">

      ${
        headingItem
          ? `
            <h1
              id="${headingItem.id}"
              class="${
                headingItem.classes || ""
              }"
            >
              ${headingItem.content}
            </h1>
          `
          : ``
      }

      <ul>
        ${bullets
          .map(
            b => `
              <li
                id="${b.id}"
                class="${
                  b.classes || ""
                }"
              >
                ${b.content}
              </li>
            `
          )
          .join("")}
      </ul>

    </section>
  `;

  return {
    html,

    animation:
      "highlightOne",

    ids
  };
}