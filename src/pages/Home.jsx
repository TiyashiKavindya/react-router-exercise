import { useState } from "react";
import { Container, Form, Alert, Button } from "react-bootstrap";
import PageHeader from "../components/PageHeader";

// Home component represent the home page of the website
function Home() {
    // State hooks to manage email input and success message visibility
    const [email, setEmail] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    // Function to handle form submission
    const handleSubscribe = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        const email = e.target.email.value; // Get the email value from the form input
        if (email) {
            setEmail(email); // Set the email state
            setShowSuccess(true); // Show the success alert
        }
    };

    // Function to handle closing the success alert
    const handleClose = () => setShowSuccess(false);

    return (
        // Container component from React Bootstrap to wrap the content with proper spacing
        <Container className="mt-4">
            {/* PageHeader component to display the header section of the home page */}
            <PageHeader header="Welcome" title="Home Page" text="This is the home page of our website. Explore other sections using the navigation above." />
            
            {/* Form component from React Bootstrap for the email subscription form */}
            <Form className="box" onSubmit={handleSubscribe}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">Subscribe to our newsletter for updates</Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">Subscribe</Button>
            </Form>

            {/* Alert component to show success message upon successful subscription */}
            {showSuccess && <Alert variant='success' onClose={handleClose} dismissible>Successfully subscribed with email: {email}</Alert>}
        </Container>
    );
}

export default Home;
