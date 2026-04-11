import Builder from "taleem-builder";
import { assignMockTimings } from "../src/lib/utils/assignMockTimings.js";

export default function build(data, ctx) {
  const b = new Builder();

  // ---------------- META ----------------
  b.meta({ name: data.title || "eq-qna" });

  b.background()
    .color("#000000")
    .image("bg.webp")
    .opacity(0);

  // ---------------- SLIDE ----------------
  b.at(0).eq();

  let time = 0;

  // ---------------- ITEMS LOOP ----------------
  data.items.forEach(item => {
    // ===== QUESTION =====
    b.eqMath(item.question.line, time);

    item.question.spText?.forEach(t => {
      b.eqSpText(t);
    });

    time += 2;

    // ===== ANSWER =====
    b.eqMath(item.answer.line, time);

    if (item.answer.image) {
      b.eqSpImage(ctx.resolveImage(item.answer.image));
    }

    item.answer.spText?.forEach(t => {
      b.eqSpText(t);
    });

    time += 2;
  });

  // ---------------- END ----------------
  b.end(time + 2);

  const deck = b.build();

  // global timing assignment
  return assignMockTimings(deck);
}