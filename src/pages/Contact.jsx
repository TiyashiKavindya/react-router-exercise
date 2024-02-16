import { Container, Button } from "react-bootstrap"
import PageHeader from "../components/PageHeader"
import Card from "../components/Card"

function Contact() {
  return (
    <Container className="mt-4">
      <PageHeader header="Contact Me" text="For questions and feedback, please choose a category below:" />
      <Card
        title="General Inquiry"
        text="For general inquiries, please email us at:"
        action={<Button href="mailto:general@example.com" variant="primary">general@example.com</Button>} />

      <Card
        title="Feedback"
        text="We value your feedback! Please share your comments at:"
        action={<Button href="mailto:feedback@example.com" variant="warning">feedback@example.com</Button>} />

      <Card
        title="Support"
        text="Need assistance? Contact our support team at:"
        action={<Button href="mailto:support@example.com" variant="secondary">support@example.com</Button>} />
    </Container>
  )
}

export default Contact