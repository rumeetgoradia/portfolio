import { createTransition } from "@utils"
export const Textarea = {
	variants: {
		base: {
			borderRadius: "sm",
			w: "full",
			border: "1px",
			borderColor: "var(--text-color)",
			bg: "var(--bg-color)",
			transition: createTransition([
				"border-color",
				"background",
				"color",
				"box-shadow",
			]),
			_focus: {
				borderColor: "var(--text-color)",
				boxShadow: "0 0 0 1px var(--text-color)",
				outline: "none",
			},
			"&[aria-invalid=true], &[data-invalid]": {
				color: "error",
				borderColor: "error",
				_focus: {
					color: "var(--text-color)",
					borderColor: "var(--text-color)",
				},
			},
		},
	},
}
