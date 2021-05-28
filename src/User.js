import React from "react";

export default class User extends React.Component {
  render() {
    if (true) {
      throw new Error("Custom error");
    } else {
      return (
        <div>
          <h1>User Component</h1>
        </div>
      );
    }
  }
}
