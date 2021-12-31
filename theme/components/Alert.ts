import { StyleFunctionProps } from "@chakra-ui/theme-tools"

export const Alert = {
	variants: {
		solid: (props: StyleFunctionProps) => {
			const { colorScheme: c } = props

			if (c === "green") {
				return {
					container: {
						bg: "brand",
						color: "white",
					},
				}
			}

			if (c === "red") {
				return {
					container: {
						bg: "error",
						color: "white",
					},
				}
			}
		},
	},
}
