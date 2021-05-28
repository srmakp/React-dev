import "./App.css";
import React from "react";
import { Button, Modal } from "react-bootstrap";

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  handleModal() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <div>
        <Button onClick={() => this.handleModal()}>Click Me</Button>
        <Modal show={this.state.show} onHide={() => this.handleModal()}>
          <Modal.Header closeButton>Model Header</Modal.Header>
          <Modal.Body>Hello Rapid Innovation(CodeZero2pi</Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.handleModal()}>Close</Button>
            <Button onClick={() => this.handleModal()}>save</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default App;
