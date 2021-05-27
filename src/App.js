import "./App.css";
import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [
        { name: "prem", phone: "123", email: "prem@gmial.com" },
        { name: "shri", phone: "183", email: "shri@gmial.com" },
        { name: "ritik", phone: "173", email: "ritik@gmial.com" },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>Listing with Map</h1>
        {this.state.list.map((item) => (
          <div>
            <span>Name: {item.name}</span>
            <span>Email: {item.email}</span>
            <span>Phone: {item.phone}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
