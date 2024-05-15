// Importing the Card component from React Bootstrap and renaming it to BootstrapCard to avoid naming conflicts
import { Card as BootstrapCard } from "react-bootstrap";

// Card component for create a card with a title, text, and optional action element
function Card(props) {
    // Destructure the props to get title, text, and action
    const { title, text, action } = props;
    return (
        // Using a Card component from React Bootstrap to structure the card
        <BootstrapCard className="box">
            {/* Card.Header to display the title, styled as an h5 element */}
            <BootstrapCard.Header as="h5">{title}</BootstrapCard.Header>
            <BootstrapCard.Body>
                <BootstrapCard.Text>{text}</BootstrapCard.Text>
                {/* Render the action element if provided */}
                {action}
            </BootstrapCard.Body>
        </BootstrapCard>
    );
}

export default Card;
