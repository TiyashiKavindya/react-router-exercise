import { Card as BootstrapCard } from "react-bootstrap"

function Card(props) {
    const { title, text, action } = props
    return (
        <BootstrapCard className="box">
            <BootstrapCard.Header as="h5">{title}</BootstrapCard.Header>
            <BootstrapCard.Body>
                <BootstrapCard.Text>{text}</BootstrapCard.Text>
                {action}
            </BootstrapCard.Body>
        </BootstrapCard>
    )
}

export default Card