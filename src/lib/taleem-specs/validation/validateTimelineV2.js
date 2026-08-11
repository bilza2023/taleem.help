// /home/bilal-tariq/00--TALEEM/taleem.help/src/lib/taleem-specs/validation/validateTimelineV2.js

import { SlideType } from "../enums/index.js";

export function validateTimelineV2(deck) {
	const errors = [];

	if (!deck || !Array.isArray(deck.deck)) {
		return fail(
			"DECK_INVALID",
			"deck.deck must be an array"
		);
	}

	const slides = deck.deck;

	validateSlideTiming(slides, errors);
	validateSlideSequence(slides, errors);
	validateShowAtRanges(slides, errors);
	validateEqSlides(slides, errors);

	return errors.length === 0
		? { ok: true }
		: { ok: false, errors };
}

/* -------------------------------------------------- */

function validateSlideTiming(slides, errors) {
	slides.forEach((slide, i) => {
		if (
			typeof slide.start !== "number" ||
			typeof slide.end !== "number"
		) {
			errors.push(err(
				"SLIDE_TIME_MISSING",
				`Slide ${i} must have numeric start/end`
			));

			return;
		}

		if (slide.start >= slide.end) {
			errors.push(err(
				"SLIDE_TIME_ORDER",
				`Slide ${i} start (${slide.start}) must be < end (${slide.end})`
			));
		}

		if (i === 0 && slide.start !== 0) {
			errors.push(err(
				"DECK_START_NOT_ZERO",
				`First slide must start at 0 (got ${slide.start})`
			));
		}
	});
}

/* -------------------------------------------------- */

function validateSlideSequence(slides, errors) {
	for (let i = 0; i < slides.length - 1; i++) {
		const a = slides[i];
		const b = slides[i + 1];

		if (a.end !== b.start) {
			errors.push(err(
				"SLIDE_SEQUENCE_BREAK",
				`Slide ${i} ends at ${a.end} but next starts at ${b.start}`
			));
		}

		if (b.start < a.start) {
			errors.push(err(
				"SLIDE_TIME_REVERSE",
				`Slide ${i + 1} starts before previous slide`
			));
		}
	}
}

/* -------------------------------------------------- */

function validateShowAtRanges(slides, errors) {
	slides.forEach((slide, si) => {
		if (!Array.isArray(slide.data)) return;

		slide.data.forEach((item, di) => {
			const showAt = item.showAt;

			if (typeof showAt !== "number") {
				errors.push(err(
					"SHOWAT_INVALID",
					`Slide ${si} item ${di} showAt must be a number`
				));

				return;
			}

			// showAt = 0 means show immediately.
			// It is valid regardless of the slide's start/end.
			if (showAt === 0) return;

			if (
				showAt < slide.start ||
				showAt >= slide.end
			) {
				errors.push(err(
					"SHOWAT_OUT_OF_RANGE",
					`Slide ${si} item ${di} showAt ${showAt} outside [${slide.start}, ${slide.end})`
				));
			}
		});
	});
}

/* -------------------------------------------------- */

function validateEqSlides(slides, errors) {
	slides.forEach((slide, si) => {
		if (slide.type !== SlideType.EQ) return;
		if (!Array.isArray(slide.data)) return;
		if (slide.data.length === 0) return;

		// First EQ line always starts at 0.
		slide.data[0].showAt = 0;

		let lastLineShowAt = 0;

		slide.data.forEach((line, li) => {
			const showAt = line.showAt;

			// First line is forced to 0 above.
			if (li > 0) {
				if (typeof showAt !== "number") {
					errors.push(err(
						"EQ_LINE_SHOWAT_INVALID",
						`EQ slide ${si} line ${li} showAt must be a number`
					));
				} else if (showAt === 0) {
					errors.push(err(
						"EQ_LINE_SHOWAT_ZERO",
						`EQ slide ${si} line ${li} showAt cannot be 0`
					));
				} else {
					if (
						showAt < slide.start ||
						showAt >= slide.end
					) {
						errors.push(err(
							"EQ_LINE_SHOWAT_RANGE",
							`EQ slide ${si} line ${li} showAt ${showAt} outside slide range`
						));
					}

					if (showAt < lastLineShowAt) {
						errors.push(err(
							"EQ_LINE_ORDER",
							`EQ slide ${si} line ${li} showAt decreases (${showAt} < ${lastLineShowAt})`
						));
					}

					lastLineShowAt = showAt;
				}
			}

			if (Array.isArray(line.spItems)) {
				line.spItems.forEach((sp, spi) => {
					if ("showAt" in sp) {
						errors.push(err(
							"EQ_SPITEM_SHOWAT_FORBIDDEN",
							`EQ slide ${si} line ${li} spItem ${spi} must not define showAt`
						));
					}
				});
			}
		});
	});
}

/* -------------------------------------------------- */

function err(code, message) {
	return { code, message };
}

function fail(code, message) {
	return {
		ok: false,
		errors: [{ code, message }]
	};
}