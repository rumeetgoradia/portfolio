import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Grid,
	GridItem,
	Input,
	Text,
	Textarea,
	useToast,
	UseToastOptions,
} from "@chakra-ui/react"
import { Button } from "@components/Button"
import { Layout } from "@components/Layout"
import type { NextPage } from "next"
import { useForm } from "react-hook-form"
import redaxios from "redaxios"

type ContactData = {
	name: string
	email: string
	subject: string
	message: string
}

export const EMAIL_REGEX =
	/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

const ContactPage: NextPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<ContactData>()

	const toast = useToast()
	const toastOptions: UseToastOptions = {
		duration: 5000,
		isClosable: true,
		position: "top-right",
	}

	const onSubmit = async (values: ContactData) => {
		// console.log(values)
		// const res = { status: 200 }
		const res = await redaxios.post("/api/contact", values)

		if (res.status === 200) {
			toast({
				title: "Message sent successfully.",
				description: "Thanks for your message! I'll get back to you shortly.",
				status: "success",
				onCloseComplete: reset,
				...toastOptions,
			})
		} else {
			toast({
				title: "Something went wrong.",
				description:
					"There was an issue processing your message. Please try again later!",
				status: "error",
				...toastOptions,
			})
		}
	}

	return (
		<Layout title="Contact">
			<Text textStyle="header" as="h1">
				Contact Me
			</Text>
			<Grid
				as="form"
				w="full"
				noValidate
				onSubmit={handleSubmit(onSubmit)}
				gap={6}
				templateColumns="repeat(2, 1fr)"
			>
				<Input type="hidden" name="url" />
				<GridItem colSpan={{ base: 2, sm: 1 }}>
					<FormControl id="name" isRequired isInvalid={!!errors.name}>
						<FormLabel>Name</FormLabel>
						<Input
							variant="base"
							type="text"
							{...register("name", {
								required: "Please enter your name.",
							})}
						/>
						<FormErrorMessage color="error">
							{errors.name?.message}
						</FormErrorMessage>
					</FormControl>
				</GridItem>
				<GridItem colSpan={{ base: 2, sm: 1 }}>
					<FormControl id="email" isRequired isInvalid={!!errors.email}>
						<FormLabel>Email</FormLabel>
						<Input
							variant="base"
							type="email"
							{...register("email", {
								required: "Please enter your email.",
								pattern: {
									value: EMAIL_REGEX,
									message: "Please enter a valid email address.",
								},
							})}
						/>
						<FormErrorMessage color="error">
							{errors.email?.message}
						</FormErrorMessage>
					</FormControl>
				</GridItem>
				<GridItem colSpan={2}>
					<FormControl id="subject" isRequired isInvalid={!!errors.subject}>
						<FormLabel>Subject</FormLabel>
						<Input
							variant="base"
							type="text"
							{...register("subject", {
								required: "Please enter the subject of your message.",
							})}
						/>
						<FormErrorMessage color="error">
							{errors.subject?.message}
						</FormErrorMessage>
					</FormControl>
				</GridItem>
				<GridItem colSpan={2}>
					<FormControl id="message" isRequired isInvalid={!!errors.message}>
						<FormLabel>Message</FormLabel>
						<Textarea
							variant="base"
							type="subject"
							rows={10}
							{...register("message", {
								required: "Please enter your message.",
							})}
						/>
						<FormErrorMessage color="error">
							{errors.message?.message}
						</FormErrorMessage>
					</FormControl>
				</GridItem>
				<GridItem colSpan={2}>
					<Button
						type="submit"
						w="full"
						disabled={isSubmitting}
						isLoading={isSubmitting}
						loadingText="Sending..."
					>
						Send Message
					</Button>
				</GridItem>
			</Grid>
		</Layout>
	)
}

export default ContactPage
