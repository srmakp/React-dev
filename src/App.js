import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: null,
    };
  }
  componentDidMount() {
    fetch("https://reqres.in/api/users").then((resp) => {
      resp.json().then((result) => {
        console.warn(result.data);
        this.setState({ users: result.data });
      });
    });
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Fetch API Data</h1>
        {this.state.users
          ? this.state.users.map((item, i) => (
              <div className="App">
                <p>
                  {i} ---
                  {item.first_name}
                  {item.last_name}--
                  {item.email}
                </p>
              </div>
            ))
          : null}
      </div>
    );
  }
}

export default App;
