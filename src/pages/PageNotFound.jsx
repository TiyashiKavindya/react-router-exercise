import { Container } from "react-bootstrap";

// 404 error page
function PageNotFound() {
  return (
    // Container component from React Bootstrap to wrap the content with proper spacing
    <Container className="page-not-found">
      <h1>404</h1>
      <p>Page Not Found</p>
    </Container>
  );
}

export default PageNotFound;