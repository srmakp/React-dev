import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
    };
  }
  valid() {
    if (!this.state.name.includes("@") && this.state.password.length < 5) {
      this.setState({
        nameError: "Invalid Name ",
        passwordError: "Password length should be more than 5",
      });
    } else if (!this.state.name.includes("@")) {
      this.setState({
        nameError: "Invalid Name ",
      });
    } else if (this.state.password.length < 5) {
      this.setState({
        passwordError: "Password length should be more than 5",
      });
    } else {
      return true;
    }
  }
  submit() {
    this.setState({
      nameError: "",
      passwordError: "",
    });
    if (this.valid()) {
      alert("form has been submited");
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Form Validation</h1>
        <input
          type="text"
          onChange={(event) => {
            this.setState({ name: event.target.value });
          }}
        />
        <p style={{ color: "red", fontSize: "1em" }}>{this.state.nameError}</p>
        <br></br>
        <input
          type="password"
          onChange={(event) => {
            this.setState({ password: event.target.value });
          }}
        />
        <p style={{ color: "red", fontSize: "1em" }}>
          {this.state.passwordError}
        </p>
        <br></br>
        <button onClick={() => this.submit()}>Submit</button>
      </div>
    );
  }
}

export default App;
