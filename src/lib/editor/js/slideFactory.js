import { SlideType } from "$lib/taleem-specs/enums";

export const slideFactory = {

	[SlideType.TitleAndSubtitle]: () => ({
		type: SlideType.TitleAndSubtitle,
		data: [
			{ name: "title", content: "" },
			{ name: "subtitle", content: "" }
		]
	}),

	[SlideType.TitleAndPara]: () => ({
		type: SlideType.TitleAndPara,
		data: [
			{ name: "title", content: "" },
			{ name: "para", content: "" }
		]
	}),

	[SlideType.BulletList]: () => ({
		type: SlideType.BulletList,
		data: [
			{ name: "heading", content: "" },
			{ name: "bullet", content: "" }
		]
	}),

	[SlideType.TwoColumnText]: () => ({
		type: SlideType.TwoColumnText,
		data: [
			{ name: "left", content: "" },
			{ name: "right", content: "" }
		]
	}),

	[SlideType.ImageSlide]: () => ({
		type: SlideType.ImageSlide,
		data: [
			{ name: "image", content: "" }
		]
	}),

	[SlideType.FillImage]: () => ({
		type: SlideType.FillImage,
		data: [
			{ name: "image", content: "" }
		]
	}),

	[SlideType.ImageWithTitle]: () => ({
		type: SlideType.ImageWithTitle,
		data: [
			{ name: "title", content: "" },
			{ name: "image", content: "" }
		]
	}),

	[SlideType.ImageWithCaption]: () => ({
		type: SlideType.ImageWithCaption,
		data: [
			{ name: "image", content: "" },
			{ name: "caption", content: "" }
		]
	}),

	[SlideType.ImageLeftBulletsRight]: () => ({
		type: SlideType.ImageLeftBulletsRight,
		data: [
			{ name: "image", content: "" },
			{ name: "bullet", content: "" }
		]
	}),

	[SlideType.ImageRightBulletsLeft]: () => ({
		type: SlideType.ImageRightBulletsLeft,
		data: [
			{ name: "image", content: "" },
			{ name: "bullet", content: "" }
		]
	}),

	[SlideType.KeyIdeas]: () => ({
		type: SlideType.KeyIdeas,
		data: [
			{ name: "card", icon: "🧠", label: "" },
			{ name: "card", icon: "📘", label: "" },
			{ name: "card", icon: "🧩", label: "" },
			{ name: "card", icon: "🎯", label: "" }
		]
	}),

	[SlideType.Quote]: () => ({
		type: SlideType.Quote,
		data: [
			{ name: "quote", content: "" },
			{ name: "author", content: "" }
		]
	}),

	[SlideType.Table]: () => ({
		type: SlideType.Table,
		data: [
			["Column A", "Column B"],
			["", ""]
		]
	}),

	[SlideType.BarChart]: () => ({
		type: SlideType.BarChart,
		data: [
			{ name: "bar", label: "A", value: 0 }
		]
	}),

	[SlideType.ProgressBar]: () => ({
		type: SlideType.ProgressBar,
		data: [
			{ name: "bar", label: "Progress", value: 0 }
		]
	}),

	[SlideType.Eq]: () => ({
		type: SlideType.Eq,
		data: []
	})

};