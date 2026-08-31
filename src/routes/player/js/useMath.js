

///home/bilal-tariq/00--TALEEM/taleem.help/src/routes/player/js/useMath.js
import katex from "katex";

export function useMath(root = document) {
	const elements = root.querySelectorAll(".eq-math");

	elements.forEach((el) => {
		const tex = el.textContent.trim();

		katex.render(tex.replace(/\$\$/g, ""), el, {
			throwOnError: false,
			displayMode: false
		});
	});
}