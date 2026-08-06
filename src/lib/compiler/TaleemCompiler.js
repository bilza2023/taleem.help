
// /home/bilal-tariq/00--TALEEM/taleem.help/src/lib/compiler/TaleemCompiler.js

import { compileTimings } from "./utils/compileTimings.js";
import { templates } from "./templates/index.js";
import { runPrimitive } from "./animation-primtives/runPrimitive.js";
import { DeckVersion } from "$lib/taleem-specs/enums";

export function TaleemCompiler(presentation) {

// --------------------------------------------------
// determine presentation end
// --------------------------------------------------
// debugger;
let presentationEnd = presentation.presentationEnd;

if (presentationEnd == null) {

  const lastSlide =
    presentation.deck[presentation.deck.length - 1];

  presentationEnd =
    (lastSlide?.end ?? 0) + 10;

}

// --------------------------------------------------
// timings
// --------------------------------------------------

compileTimings(
  presentation.deck,
  presentationEnd
);
  // --------------------------------------------------
  // compile slides
  // --------------------------------------------------

  const compiledDeck =
    presentation.deck.map(slide => {

      const template =
        templates[slide.type];

      const compiled =
        template(slide);

      // --------------------------------------------------
      // safe html cleanup
      // --------------------------------------------------

      compiled.html =
        compiled.html
          .replace(/\n+/g, " ")
          .replace(/\t+/g, " ")
          .replace(/>\s+</g, "><")
          .replace(/\s{2,}/g, " ")
          .trim();

      // --------------------------------------------------
      // animation
      // --------------------------------------------------

      const primitive =
        runPrimitive({

          type:
            compiled.animation,

          items:
            compiled.primitiveItems ??

            compiled.ids.map((id, index) => ({

              id,

              showAt:
                slide.data[index]?.showAt ?? 0

            }))

        });

      return {

        type: slide.type,

        start: slide.start,

        end: slide.end,

        html: compiled.html,

        groups:
          primitive.groups,

        actions:
          primitive.actions

      };

    });

  // --------------------------------------------------
  // compiled presentation
  // --------------------------------------------------

  return {

    version: DeckVersion.V2,

    name:
      presentation.name,

    audio:
      presentation.audio,

    background:
      presentation.background,

    deck:
      compiledDeck

  };

}