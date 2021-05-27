import React from "react";
import "./App.css";
// import Profile from "./Profile";
import User from "./User";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: true,
    };
  }
  render() {
    return (
      <div>
        <h1>React : component will unmount</h1>
        {this.state.toggle ? <User /> : null}
        <button onClick={() => this.setState({ toggle: !this.state.toggle })}>
          Delete User
        </button>
      </div>
    );
  }
}
export default App;
