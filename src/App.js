import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Use bootstrap </h1>
        <Button onClick={() => alert("item clicked")}>Click me</Button>

        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="2">
              1 of 3
            </Col>
            <Col md="auto">Variable width content</Col>
            <Col xs lg="2">
              3 of 3
            </Col>
          </Row>
          <Row>
            <Col>1 of 3</Col>
            <Col md="auto">Variable width content</Col>
            <Col xs lg="2">
              3 of 3
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
