
// /src/compiler/templates/compileBarChart.js

import { addIdToItems } from "./helpers/addIdToItems.js";

export function compileBarChart(slide) {
  const rawItems = slide.data ?? [];

  const items =
    addIdToItems(rawItems);

  const bars =
    items.filter(
      d => d.name === "bar"
    );

  const ids =
    items.map(i => i.id);

  const barsData =
    bars.map(d => ({
      id: d.id,

      label: d.label,

      value:
        Number(d.value),

      classes:
        d.classes || ""
    }));

  const maxValue =
    Math.max(
      ...barsData.map(
        b => b.value
      ),
      1
    );

  const html = `
    <section class="slide barChart">

      <div class="bar-chart">

        ${barsData.map(bar => {
          const width =
            (bar.value / maxValue)
            * 100;

          return `
            <div
              id="${bar.id}"

              class="bar-row hidden ${bar.classes}"
            >

              <div class="bar-label">
                ${bar.label}
              </div>

              <div class="bar-track">
                <div
                  class="bar-fill"

                  style="width:${width}%"
                ></div>
              </div>

              <div class="bar-value">
                ${bar.value}
              </div>

            </div>
          `;
        }).join("")}

      </div>

    </section>
  `;

  return {
    html,

    animation:
      "progressiveReveal",

    ids
  };
}