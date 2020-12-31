import { useEffect, useState } from "react"
import Particles from "react-particles-js"
import { PRIMARY_COLOR } from "../../themes/CommonTheme"

const ParticlesBackground: React.FC = () => {
	const [numParticles, setNumParticles] = useState<number>(0)

	const updateNumParticles = () => {
		setNumParticles(
			Math.max(
				75,
				Math.floor(Math.max(window.innerWidth, window.innerHeight) / 7)
			)
		)
	}

	useEffect(() => {
		updateNumParticles()
		window.addEventListener("resize", updateNumParticles)
		return () => {
			window.removeEventListener("resize", updateNumParticles)
		}
	}, [])

	return (
		<Particles
			style={{
				overflow: "hidden",
				position: "fixed",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
				zIndex: 5,
				height: "120vh",
				width: "120%",
				backgroundColor: "transparent",
			}}
			params={{
				background: {
					color: {
						value: "#000",
					},
					image: "",
					position: "50% 50%",
					repeat: "no-repeat",
					size: "cover",
					opacity: 0,
				},
				detectRetina: true,
				fpsLimit: 60,
				interactivity: {
					detectsOn: "window",
					events: {
						onHover: {
							enable: true,
							mode: "repulse",
							parallax: {
								enable: true,
								force: 30,
								smooth: 20,
							},
						},
						resize: true,
					},
					modes: {
						repulse: {
							distance: 125,
							duration: 0.4,
							speed: 0.5,
						},
					},
				},
				particles: {
					color: {
						value: PRIMARY_COLOR,
					},
					links: {
						color: {
							value: PRIMARY_COLOR,
						},

						distance: 80,
						enable: true,
						opacity: 0.4,
						width: 1,
						warp: false,
					},
					move: {
						angle: 90,
						attract: {
							enable: true,
							rotate: {
								x: 600,
								y: 1200,
							},
						},
						direction: "none",
						enable: true,
						outMode: "out",
						random: false,
						speed: 1,
						straight: false,
						trail: {
							enable: false,
						},
						vibrate: false,
						warp: false,
					},
					number: {
						density: {
							enable: false,
						},
						limit: 0,
						value: numParticles,
					},
					opacity: {
						animation: {
							enable: true,
							minimumValue: 0.6,
							speed: 0.25,
							sync: false,
						},
						random: {
							enable: false,
							minimumValue: 1,
						},
						value: 0.9,
					},
					size: {
						animation: {
							destroy: "none",
							enable: true,
							minimumValue: 1,
							speed: 2,
							startValue: "max",
							sync: false,
						},
						random: {
							enable: true,
							minimumValue: 1,
						},
						value: 3,
					},
				},
				pauseOnBlur: true,
			}}
		/>
	)
}

export default ParticlesBackground
