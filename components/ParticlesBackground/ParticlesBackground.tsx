import { Box, useColorModeValue, useTheme } from "@chakra-ui/react"
import { createTransition } from "@utils"
import Particles from "react-tsparticles"

const ParticlesBackground: React.FC = () => {
	const theme = useTheme()
	const coverOpacity = useColorModeValue(0.45, 0.2)

	return (
		<>
			<Particles
				options={{
					background: {
						color: {
							value: "#000000",
						},
						opacity: 0,
					},
					interactivity: {
						events: {
							onClick: {
								mode: "push",
							},
							onHover: {
								enable: true,
								mode: "repulse",
								parallax: {
									enable: true,
									force: 15,
									smooth: 10,
								},
							},
						},
						modes: {
							repulse: {
								distance: 200,
								factor: 100,
								speed: 1,
								maxSpeed: 2,
							},
						},
					},
					particles: {
						color: {
							value: theme.colors["brand"],
							animation: {
								h: {
									speed: 20,
									sync: false,
								},
								s: {
									sync: false,
								},
								l: {
									sync: false,
								},
							},
						},
						destroy: {
							split: {
								sizeOffset: false,
							},
						},
						links: {
							color: {
								value: theme.colors["brand"],
							},
							distance: 80,
							enable: true,
							opacity: 0.4,
						},
						move: {
							attract: {
								enable: true,
								rotate: {
									x: 600,
									y: 1200,
								},
							},
							enable: true,
							path: {},
							outModes: "out",
							speed: 1,
							spin: {},
						},
						number: {
							density: {
								enable: true,
								area: 500,
								factor: 1000,
							},
						},
						opacity: {
							random: false,
							value: {
								min: 0.1,
								max: 0.9,
							},
							animation: {
								enable: true,
								speed: 0.25,
							},
						},
						size: {
							value: {
								min: 1,
								max: 3,
							},
							animation: {
								enable: true,
								speed: 2,
								startValue: "max",
							},
						},
					},
					zLayers: 1,
					pauseOnBlur: true,
					pauseOnOutsideViewport: true,
				}}
			/>
			<Box
				position="fixed"
				w="full"
				h="full"
				zIndex={0}
				bg="var(--bg-color)"
				opacity={coverOpacity}
				transition={createTransition(["background-color", "opacity"])}
			/>
		</>
	)
}

export default ParticlesBackground
