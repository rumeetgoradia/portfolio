import { yupResolver } from "@hookform/resolvers/yup"
import { FormHelperText, Grid } from "@material-ui/core"
import axios from "axios"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { ContactFormInputs } from "../../../constants"
import BorderedButton from "../../BorderedButton"
import { Header } from "../../Typography"
import { useContactFormStyles } from "./ContactForm.styles"
import ContactFormItem from "./ContactFormItem"

const phoneRegex = /^$|^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/

const contactFormSchema = yup.object().shape({
	name: yup.string().required("Please enter your name."),
	email: yup
		.string()
		.email("Please enter a valid email address.")
		.required("Please enter your email address."),
	phone: yup.string().matches(phoneRegex, "Please enter a valid phone number."),
	message: yup.string().required("Please enter a message."),
})

const ContactForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		errors,
		formState,
		reset,
	} = useForm<ContactFormInputs>({
		resolver: yupResolver(contactFormSchema),
		mode: "all",
	})

	const onSubmit = (data: ContactFormInputs) => {
		axios({
			method: "POST",
			url: "https://formspree.io/f/xjvpjelz",
			data,
		})
			.then(() => {
				reset({})
			})
			.catch(() => {
				alert(
					"There was an issue sending your message. Please try again later!"
				)
			})
	}

	const classes = useContactFormStyles()

	return (
		<>
			<Header>Contact Me</Header>
			<form onSubmit={handleSubmit(onSubmit)} name="contact" method="POST">
				<input type="hidden" name="form-name" value="contact" />
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<ContactFormItem
							inputRef={register}
							name="name"
							label="Name"
							schemaError={errors.name}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<ContactFormItem
							inputRef={register}
							name="email"
							label="Email Address"
							schemaError={errors.email}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<ContactFormItem
							inputRef={register}
							name="phone"
							label="Phone Number"
							schemaError={errors.phone}
						/>
					</Grid>
					<Grid item xs={12}>
						<ContactFormItem
							inputRef={register}
							name="message"
							label="Message"
							schemaError={errors.message}
							multiline
							rows={6}
						/>
					</Grid>
					<Grid item xs={12}>
						<BorderedButton type="submit">
							{formState.isSubmitting ? "Submitting..." : "Submit"}
						</BorderedButton>
						{formState.isSubmitSuccessful && (
							<FormHelperText className={classes.success}>
								Message sent successfully!
							</FormHelperText>
						)}
					</Grid>
				</Grid>
			</form>
		</>
	)
}

export default ContactForm
