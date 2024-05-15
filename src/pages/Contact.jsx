import { Container, Button } from "react-bootstrap";
import PageHeader from "../components/PageHeader";
import Card from "../components/Card";

// Contact component represent the contact page of the website
function Contact() {
  return (
    // Container component from React Bootstrap to wrap the content with proper spacing
    <Container className="mt-4">
      {/* PageHeader component to display the header section of the contact page */}
      <PageHeader header="Contact Me" text="For questions and feedback, please choose a category below:" />
      
      {/* Card component for general inquiries, with an email button as the action */}
      <Card
        title="General Inquiry"
        text="For general inquiries, please email us at:"
        action={<Button href="mailto:general@example.com" variant="primary">general@example.com</Button>}
      />

      {/* Card component for feedback, with an email button as the action */}
      <Card
        title="Feedback"
        text="We value your feedback! Please share your comments at:"
        action={<Button href="mailto:feedback@example.com" variant="warning">feedback@example.com</Button>}
      />

      {/* Card component for support, with an email button as the action */}
      <Card
        title="Support"
        text="Need assistance? Contact our support team at:"
        action={<Button href="mailto:support@example.com" variant="secondary">support@example.com</Button>}
      />
    </Container>
  );
}

export default Contact;
