
import { z } from "zod";

/* ───────────── Base ───────────── */
const baseSlide = z.object({
  start: z.number(),
  end: z.number()
});

const showAt = z.number().optional();

/* ───────────── Text slides ───────────── */

const titleAndSubtitle = baseSlide.extend({
  type: z.literal("titleAndSubtitle"),
  data: z.array(
    z.union([
      z.object({ name: z.literal("title"), content: z.string(), showAt }),
      z.object({ name: z.literal("subtitle"), content: z.string(), showAt })
    ])
  )
});

const titleAndPara = baseSlide.extend({
  type: z.literal("titleAndPara"),
  data: z.array(
    z.union([
      z.object({ name: z.literal("title"), content: z.string(), showAt }),
      z.object({ name: z.literal("para"), content: z.string(), showAt })
    ])
  )
});
const bulletList = baseSlide.extend({
  type: z.literal("bulletList"),
  data: z.array(
    z.object({
      name: z.union([
        z.literal("heading"),
        z.literal("bullet")
      ]),
      content: z.string(),
      showAt
    })
  )
});

const twoColumnText = baseSlide.extend({
  type: z.literal("twoColumnText"),
  data: z.array(
    z.union([
      z.object({ name: z.literal("title"), content: z.string(), showAt }),
      z.object({ name: z.literal("left"), content: z.string(), showAt }),
      z.object({ name: z.literal("right"), content: z.string(), showAt })
    ])
  )
});

/* ───────────── Image slides ───────────── */

const imageSlide = baseSlide.extend({
  type: z.literal("imageSlide"),
  data: z.array(
    z.object({ name: z.literal("image"), content: z.string(), showAt })
  )
});

const fillImage = baseSlide.extend({
  type: z.literal("fillImage"),
  data: z.array(
    z.object({ name: z.literal("image"), content: z.string(), showAt })
  )
});

const imageWithTitle = baseSlide.extend({
  type: z.literal("imageWithTitle"),
  data: z.array(
    z.union([
      z.object({ name: z.literal("image"), content: z.string(), showAt }),
      z.object({ name: z.literal("title"), content: z.string(), showAt })
    ])
  )
});

const imageWithCaption = baseSlide.extend({
  type: z.literal("imageWithCaption"),
  data: z.array(
    z.union([
      z.object({ name: z.literal("image"), content: z.string(), showAt }),
      z.object({ name: z.literal("caption"), content: z.string(), showAt })
    ])
  )
});

const imageLeftBulletsRight = baseSlide.extend({
  type: z.literal("imageLeftBulletsRight"),
  data: z.array(
    z.object({
      name: z.union([z.literal("image"), z.literal("bullet")]),
      content: z.string(),
      showAt
    })
  )
});

const imageRightBulletsLeft = baseSlide.extend({
  type: z.literal("imageRightBulletsLeft"),
  data: z.array(
    z.object({
      name: z.union([z.literal("image"), z.literal("bullet")]),
      content: z.string(),
      showAt
    })
  )
});

/* ───────────── Data slides ───────────── */

const table = baseSlide.extend({
  type: z.literal("table"),
  data: z.array(z.array(z.string()).min(1)).min(1)
});

const barChart = baseSlide.extend({
  type: z.literal("barChart"),
  data: z.array(
    z.object({
      name: z.literal("bar"),
      label: z.string(),
      value: z.number(),
      showAt
    })
  )
});

const progressbar = baseSlide.extend({
  type: z.literal("progressbar"),
  data: z.array(
    z.object({
      name: z.literal("bar"),
      label: z.string(),
      value: z.number(),
      showAt
    })
  )
});

/* ───────────── Quote / ideas ───────────── */

const quoteSlide = baseSlide.extend({
  type: z.literal("quoteSlide"),
  data: z.array(
    z.union([
      z.object({ name: z.literal("quote"), content: z.string(), showAt }),
      z.object({ name: z.literal("author"), content: z.string(), showAt })
    ])
  )
});

const keyIdeasSlide = baseSlide.extend({
  type: z.literal("keyIdeasSlide"),
  data: z.array(
    z.object({
      name: z.literal("card"),
      icon: z.string(),
      label: z.string(),
      showAt: z.number().optional()
    })
  )
});


/* ───────────── EQ ───────────── */

const eq = baseSlide.extend({
  type: z.literal("eq"),
  data: z.array(
    z.object({
      name: z.literal("line"),
      type: z.enum(["heading", "text", "math"]),
      content: z.string(),
      showAt,
      spItems: z
        .array(
          z.object({
            type: z.enum(["spHeading", "spText", "spMath", "spImage"]),
            content: z.string()
          })
        )
        .optional()
    })
  )
});

/* ───────────── Deck ───────────── */

export const zodDeckV1 = z.object({
  version: z.literal("deck-v1"),
  name: z.string().optional(),
  audio: z.string().regex(/^[a-zA-Z0-9-_]+\.(opus|mp3|wav)$/).optional(),
  background: z
    .object({
      backgroundColor: z.string().optional(),
      backgroundImage: z.string().nullable().optional(),
      backgroundImageOpacity: z.number().optional()
    })
    .optional(),
  deck: z.array(
    z.discriminatedUnion("type", [
      titleAndSubtitle,
      titleAndPara,
      bulletList,
      twoColumnText,
      imageSlide,
      fillImage,
      imageWithTitle,
      imageWithCaption,
      imageLeftBulletsRight,
      imageRightBulletsLeft,
      table,
      barChart,
      progressbar,
      quoteSlide,
      keyIdeasSlide,
      eq
    ])
  )
});
