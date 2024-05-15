import { Container, Accordion } from "react-bootstrap";
import PageHeader from "../components/PageHeader";
import Card from "../components/Card";

// Sample data for the accordion items and card content
const data = [
    { id: "0", header: 'Accordion Item #1', title: 'Card Header #1', content: "Here's some content for the first blog article." },
    { id: "1", header: 'Accordion Item #2', title: 'Card Header #2', content: "Here's some content for the second blog article." },
    { id: "2", header: 'Accordion Item #3', title: 'Card Header #3', content: "Here's some content for the third blog article." },
];

// Blogs component represent the blog articles page
function Blogs() {
    return (
        // Container component from React Bootstrap to wrap the content with proper spacing
        <Container className="mt-4">
            {/* PageHeader component to display the header section of the blogs page */}
            <PageHeader header="Blogs" title="Blog Articles" text="Find the latest articles and blog posts here." />
            
            {/* Accordion component from React Bootstrap to display collapsible content sections */}
            <Accordion defaultActiveKey="0">
                {/* Mapping through the data array to generate Accordion items */}
                {data.map(item => (
                    // Each Accordion.Item is assigned a unique key and eventKey based on the item id
                    <Accordion.Item key={item.id} eventKey={item.id}>
                        {/* Accordion.Header to display the header text for each accordion item */}
                        <Accordion.Header>{item.header}</Accordion.Header>
                        {/* Accordion.Body to display the content of each accordion item, including a custom Card component */}
                        <Accordion.Body>
                            <Card title={item.title} text={item.content} />
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </Container>
    );
}

export default Blogs;
