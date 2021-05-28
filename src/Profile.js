import React from "react";
class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "prem",
      email: "prem@gmail.com",
      count: 0,
    };
  }
  updateState() {
    this.setState({
      name: "Shri",
      count: this.state.count + 1,
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <h1>Email:{this.state.email}</h1>
        <button
          onClick={() => {
            this.updateState();
          }}
        >
          Update
        </button>
      </div>
    );
  }
}

export default Profile;
