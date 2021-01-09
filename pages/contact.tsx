import { Grid } from "@material-ui/core"
import ContactButton from "../components/Contact/ContactButton"
import ContactForm from "../components/Contact/ContactForm"
import Layout, { Base } from "../components/Layout"
import { CONTACT_LINKS } from "../constants"

const ContactPage: React.FC = () => {
	return (
		<Layout title="Contact">
			<Base xs={12}>
				<Grid container spacing={2}>
					{CONTACT_LINKS.map((contactLink, index) => (
						<Grid key={`contact-link-${index}`} item xs={12} md={6}>
							<ContactButton contactLink={contactLink} />
						</Grid>
					))}
				</Grid>
			</Base>
			<Base xs={12}>
				<ContactForm />
			</Base>
		</Layout>
	)
}

export default ContactPage
