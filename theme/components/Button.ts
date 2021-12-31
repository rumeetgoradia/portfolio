import { createTransition } from "@utils"
export const Button = {
	baseStyle: {
		display: "flex",
		justify: "center",
		align: "center",
		textTransform: "uppercase",
		lineHeight: 1,
		fontWeight: 400,
		transition: createTransition([
			"transform",
			"border-color",
			"color",
			"background",
			"opacity",
		]),
		_focus: {
			outline: "none",
			boxShadow: "none",
		},
		_active: {
			transform: "scale(0.975)",
		},
	},
	variants: {
		outline: {
			border: "1px",
			borderColor: "current",
			borderRadius: "sm",
			bg: "var(--bg-color)",
			_hover: {
				bg: "var(--text-color)",
				color: "var(--bg-color)",
			},
		},
	},
	sizes: {
		sm: {
			fontSize: "sm",
			letterSpacing: 2,
			pl: "5px",
			pr: "3px",
		},
		md: {
			fontSize: "15px",
			letterSpacing: 2,
			pl: "12px",
			pr: "10px",
		},
	},
}
