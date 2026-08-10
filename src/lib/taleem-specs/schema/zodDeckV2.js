import { z } from "zod";
import {DeckVersion,SlideType,ContentType,EqLineType,EqSidePanelType,TaleemPlayerThemes} from "$lib/taleem-specs/enums";

/* ───────────── Shared Literals ───────────── */

const title = z.literal(ContentType.TITLE);
const subtitle = z.literal(ContentType.SUBTITLE);
const para = z.literal(ContentType.PARA);
const heading = z.literal(ContentType.HEADING);
const bullet = z.literal(ContentType.BULLET);
const left = z.literal(ContentType.LEFT);
const right = z.literal(ContentType.RIGHT);
const image = z.literal(ContentType.IMAGE);
const caption = z.literal(ContentType.CAPTION);
const quote = z.literal(ContentType.QUOTE);
const author = z.literal(ContentType.AUTHOR);
const card = z.literal(ContentType.CARD);
const bar = z.literal(ContentType.BAR);
const line = z.literal(ContentType.LINE);

/* ───────────── Base ───────────── */

const baseSlide = z.object({
	start: z.number(),
	end: z.number()
});

const showAt = z.number().optional();

/* ───────────── Text Slides ───────────── */

const titleAndSubtitle = baseSlide.extend({
	type: z.literal(SlideType.TitleAndSubtitle),
	data: z.array(
		z.union([
			z.object({
				name: title,
				content: z.string(),
				showAt
			}),
			z.object({
				name: subtitle,
				content: z.string(),
				showAt
			})
		])
	)
});

const titleAndPara = baseSlide.extend({
	type: z.literal(SlideType.TitleAndPara),
	data: z.array(
		z.union([
			z.object({
				name: title,
				content: z.string(),
				showAt
			}),
			z.object({
				name: para,
				content: z.string(),
				showAt
			})
		])
	)
});

const bulletList = baseSlide.extend({
	type: z.literal(SlideType.BulletList),
	data: z.array(
		z.object({
			name: z.union([
				heading,
				bullet
			]),
			content: z.string(),
			showAt
		})
	)
});

const twoColumnText = baseSlide.extend({
	type: z.literal(SlideType.TwoColumnText),
	data: z.array(
		z.union([
			z.object({
				name: title,
				content: z.string(),
				showAt
			}),
			z.object({
				name: left,
				content: z.string(),
				showAt
			}),
			z.object({
				name: right,
				content: z.string(),
				showAt
			})
		])
	)
});
/* ───────────── Image Slides ───────────── */

const imageSlide = baseSlide.extend({
	type: z.literal(SlideType.ImageSlide),
	data: z.array(
		z.object({
			name: image,
			content: z.string(),
			showAt
		})
	)
});

const fillImage = baseSlide.extend({
	type: z.literal(SlideType.FillImage),
	data: z.array(
		z.object({
			name: image,
			content: z.string(),
			showAt
		})
	)
});

const imageWithTitle = baseSlide.extend({
	type: z.literal(SlideType.ImageWithTitle),
	data: z.array(
		z.union([
			z.object({
				name: image,
				content: z.string(),
				showAt
			}),
			z.object({
				name: title,
				content: z.string(),
				showAt
			})
		])
	)
});

const imageWithCaption = baseSlide.extend({
	type: z.literal(SlideType.ImageWithCaption),
	data: z.array(
		z.union([
			z.object({
				name: image,
				content: z.string(),
				showAt
			}),
			z.object({
				name: caption,
				content: z.string(),
				showAt
			})
		])
	)
});

const imageLeftBulletsRight = baseSlide.extend({
	type: z.literal(SlideType.ImageLeftBulletsRight),
	data: z.array(
		z.object({
			name: z.union([
				image,
				bullet
			]),
			content: z.string(),
			showAt
		})
	)
});

const imageRightBulletsLeft = baseSlide.extend({
	type: z.literal(SlideType.ImageRightBulletsLeft),
	data: z.array(
		z.object({
			name: z.union([
				image,
				bullet
			]),
			content: z.string(),
			showAt
		})
	)
});

/* ───────────── Data Slides ───────────── */

const table = baseSlide.extend({
	type: z.literal(SlideType.Table),
	data: z.array(
		z.array(z.string()).min(1)
	).min(1)
});

const barChart = baseSlide.extend({
	type: z.literal(SlideType.BarChart),
	data: z.array(
		z.object({
			name: bar,
			label: z.string(),
			value: z.number(),
			showAt
		})
	)
});

const progressbar = baseSlide.extend({
	type: z.literal(SlideType.ProgressBar),
	data: z.array(
		z.object({
			name: bar,
			label: z.string(),
			value: z.number(),
			showAt
		})
	)
});

/* ───────────── Quote / Ideas ───────────── */

const quoteSlide = baseSlide.extend({
	type: z.literal(SlideType.Quote),
	data: z.array(
		z.union([
			z.object({
				name: quote,
				content: z.string(),
				showAt
			}),
			z.object({
				name: author,
				content: z.string(),
				showAt
			})
		])
	)
});

const keyIdeasSlide = baseSlide.extend({
	type: z.literal(SlideType.KeyIdeas),
	data: z.array(
		z.object({
			name: card,
			icon: z.string(),
			label: z.string(),
			showAt
		})
	)
});

/* ───────────── EQ ───────────── */

const eq = baseSlide.extend({
	type: z.literal(SlideType.Eq),
	data: z.array(
		z.object({
			name: line,
			type: z.enum(Object.values(EqLineType)),
			content: z.string(),
			showAt,
			spItems: z.array(
				z.object({
					type: z.enum(
						Object.values(EqSidePanelType)
					),
					content: z.string()
				})
			).optional()
		})
	)
});

/* ───────────── Deck ───────────── */

export const zodDeckV2 = z.object({

	version: z.literal(DeckVersion.V2),

	name: z.string().optional(),
	
	theme: z.enum(Object.values(TaleemPlayerThemes)).optional(),

	audio: z.string().regex(/^[a-zA-Z0-9-_]+\.(opus|mp3|wav)$/).nullable().optional(),

	background: z.object({
		backgroundColor: z.string().optional(),
		backgroundImage: z.string().nullable().optional(),
		backgroundImageOpacity: z.number().optional()
	}).optional(),

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