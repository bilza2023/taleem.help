
import { addIdToItems } from "./helpers/addIdToItems.js";
import {ContentType,GroupType} from "$lib/taleem-specs/enums";
export function compileBulletList(slide) {
  const rawItems = slide.data ?? [];

  const items = addIdToItems(rawItems);

  const bullets = items.filter(d => d.name === ContentType.BULLET);

  const ids = items.map(i => i.id);

  const html = `
    <section class="slide bulletList">
      <ul>
        ${bullets
          .map(
            b => `
              <li
                id="${b.id}"
                class="${GroupType.HIDDEN}"
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
    animation: "progressiveReveal",
    ids
  };
}