import { Card } from "react-bootstrap"

function PageHeader(props) {
    const { header, title, text } = props
    return (
        <Card className="box">
            <Card.Header as="h5">{header}</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default PageHeader;