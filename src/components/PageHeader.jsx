import { Card } from "react-bootstrap"

// PageHeader component for set the header for each page
function PageHeader(props) {
    // Destructure the props to get header, title, and text
    const { header, title, text } = props;
    return (
        // Using a Card component from React Bootstrap to structure the header section
        <Card className="box">
            {/* Card.Header to display the header, styled as an h5 element */}
            <Card.Header as="h5">{header}</Card.Header>
            <Card.Body>
                {/* Card.Title to display the main title of the page */}
                <Card.Title>{title}</Card.Title>
                {/* Card.Text to display the descriptive text or subtitle */}
                <Card.Text>{text}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default PageHeader;