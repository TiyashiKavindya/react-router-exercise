import { Container, Accordion } from "react-bootstrap"
import PageHeader from "../components/PageHeader"
import Card from "../components/Card"

const data = [
    { id: "0", header: 'Accordion Item #1', title: 'Card Header #1', content: "here's some content for the first blog article." },
    { id: "1", header: 'Accordion Item #2', title: 'Card Header #2', content: "here's some content for the second blog article." },
    { id: "2", header: 'Accordion Item #3', title: 'Card Header #3', content: "here's some content for the third blog article." },
]

function Blogs() {
    return (
        <Container className="mt-4">
            <PageHeader header="Blogs" title="Blog Articles" text="Find the latest articles and blog posts here." />
            <Accordion defaultActiveKey="0">
                {data.map(item => (
                    <Accordion.Item key={item.id} eventKey={item.id}>
                        <Accordion.Header>{item.header}</Accordion.Header>
                        <Accordion.Body>
                            <Card title={item.title} text={item.content} />
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </Container>
    )
}

export default Blogs