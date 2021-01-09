import ContactForm from "../components/Contact/ContactForm"
import Layout, { Base } from "../components/Layout"

const ContactPage: React.FC = () => {
	return (
		<Layout title="Contact">
			<Base xs={12}>
				<ContactForm />
			</Base>
		</Layout>
	)
}

export default ContactPage
