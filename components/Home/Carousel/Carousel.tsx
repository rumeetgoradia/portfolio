import { Box, Container, IconButton } from "@chakra-ui/react"
import fetcher from "@lib/fetcher"
import { createTransition } from "@utils"
import NextImage from "next/image"
import { useMemo, useRef } from "react"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import Slider, { Settings } from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import useSWR from "swr"

export type CarouselImage = {
	src: string
	width: number
	height: number
	blurDataUrl: string
}

const Carousel: React.FC = ({}) => {
	const { data } = useSWR<{ carouselImages: CarouselImage[] }>(
		"/api/carousel-images",
		fetcher
	)

	const carouselItems = useMemo(
		() =>
			data ? (
				data.carouselImages.map(({ src, width, height, blurDataUrl }) => (
					<Box
						pointerEvents="none"
						userSelect="none"
						key={`${src}-carousel-image`}
					>
						<Box
							h={{ base: "250px", md: "300px" }}
							w={{
								base: `${(width * 250) / height}px`,
								md: `${(width * 300) / height}px`,
							}}
							position="relative"
						>
							<NextImage
								src={src}
								layout="fill"
								objectFit="contain"
								objectPosition="center center"
								placeholder="blur"
								blurDataURL={blurDataUrl}
							/>
						</Box>
					</Box>
				))
			) : (
				<Box>
					<Box bg="gray.100" h={{ base: "250px", md: "300px" }} w="full" />
				</Box>
			),
		[data]
	)
	const sliderRef = useRef<Slider | null>(null)

	const settings: Settings = {
		infinite: true,
		centerMode: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipe: true,
		swipeToSlide: true,
		variableWidth: true,
		arrows: false,
		adaptiveHeight: true,
	}

	return (
		<Container
			maxW="min(calc(100vw - 32px - 32px), var(--chakra-sizes-container-md))"
			h={{ base: "250px", md: "300px" }}
			w="full"
			position="relative"
			zIndex={99}
			p={0}
		>
			<IconButton
				icon={<BsArrowLeft />}
				onClick={() => sliderRef.current?.slickPrev()}
				aria-label="Previous image"
				position="absolute"
				zIndex={100}
				left={0}
				top="50%"
				transform="translate(-50%, -50%)"
				borderRadius="50%"
				color="current"
				bg="var(--bg-color)"
				w="32px"
				h="32px"
				size="sm"
				fontSize="md"
				_hover={{
					opacity: 1,
					fontSize: "lg",
				}}
				_focus={{
					opacity: 1,
					fontSize: "lg",
				}}
				_active={{
					opacity: 1,
					fontSize: "sm",
				}}
				transition={createTransition(["color", "background", "font-size"])}
			/>
			<Box
				w="full"
				h="full"
				cursor="grab"
				borderRadius="md"
				overflow="hidden"
				_active={{ cursor: "grabbing" }}
			>
				<Slider ref={sliderRef} {...settings}>
					{carouselItems}
				</Slider>
			</Box>
			<IconButton
				icon={<BsArrowRight />}
				onClick={() => sliderRef.current?.slickNext()}
				aria-label="Next image"
				position="absolute"
				zIndex={100}
				right={0}
				top="50%"
				transform="translate(50%, -50%)"
				borderRadius="50%"
				color="current"
				bg="var(--bg-color)"
				w="32px"
				h="32px"
				size="sm"
				fontSize="md"
				_hover={{
					opacity: 1,
					fontSize: "lg",
				}}
				_focus={{
					opacity: 1,
					fontSize: "lg",
				}}
				_active={{
					opacity: 1,
					fontSize: "sm",
				}}
				transition={createTransition(["color", "background", "font-size"])}
			/>
		</Container>
	)
}

export default Carousel
