import { useState } from "react"
import { Container, Form, Alert, Button } from "react-bootstrap"
import PageHeader from "../components/PageHeader"

function Home() {
    const [email, setEmail] = useState('')
    const [showSuccess, setShowSuccess] = useState(false)

    const handleSubscribe = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        if (email) {
            setEmail(email)
            setShowSuccess(true)
        }
    }

    const handleClose = () => setShowSuccess(false)

    return (
        <Container className="mt-4">
            <PageHeader header="Welcome" title="Home Page" text="This is the home page of our website. Explore other sections using the navigation above." />
            <Form className="box" onSubmit={handleSubscribe}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">Subscribe to our newsletter for updates</Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">Subscribe</Button>
            </Form>
            {showSuccess && <Alert variant='success' onClose={handleClose} dismissible>Successfully subscribed with email: {email} </Alert>}
        </Container>
    )
}

export default Home