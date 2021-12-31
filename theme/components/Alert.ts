import { StyleFunctionProps } from "@chakra-ui/theme-tools"

export const Alert = {
	variants: {
		solid: (props: StyleFunctionProps) => {
			const { colorScheme: c } = props

			if (c === "green") {
				return {
					container: {
						bg: "brand",
						color: "var(--text-color)",
					},
				}
			}

			if (c === "red") {
				return {
					container: {
						bg: "error",
						color: "var(--text-color)",
					},
				}
			}
		},
	},
}
