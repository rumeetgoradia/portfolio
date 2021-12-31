import { Box, BoxProps, HStack } from "@chakra-ui/react"
import { motion } from "framer-motion"

type AnimatedBarsProps = {
	animate: boolean
}

const MotionBox = motion<BoxProps>(Box)

const AnimatedBars: React.FC<AnimatedBarsProps> = ({ animate }) => {
	return (
		<HStack spacing={0.5} align="flex-start" pt={1.5}>
			{[0, 1, 2].map((n) => (
				<MotionBox
					w={0.5}
					h={2}
					bg="current"
					opacity="var(--text-opacity)"
					transformOrigin="bottom"
					animate={
						animate
							? {
									scaleY: 1 + (2 - n + 1.5) * 0.25 + (n % 2) * -1,
									transition: {
										delay: n * 0.15,
										repeat: Infinity,
										repeatType: "reverse",
										duration: 0.375,
									},
							  }
							: {}
					}
					key={`animated-bar-${n}`}
				/>
			))}
		</HStack>
		// <div className="w-auto flex items-end overflow-hidden">
		//   <span
		// 	id="bar1"
		// 	className="w-1 mr-[3px] h-2 bg-gray-300 dark:bg-gray-500 opacity-75"
		//   />
		//   <span
		// 	id="bar2"
		// 	className="w-1 mr-[3px] h-1 bg-gray-300 dark:bg-gray-500"
		//   />
		//   <span
		// 	id="bar3"
		// 	className="w-1 h-3 bg-gray-300 dark:bg-gray-500 opacity-80"
		//   />
		// </div>
	)
}

export default AnimatedBars
