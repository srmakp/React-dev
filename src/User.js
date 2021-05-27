import React, { Component } from "react";
class User extends Component {
  componentWillUnmount() {
    alert("User has been deleted");
  }
  render() {
    return (
      <div>
        <ul>
          <li>Name : prem</li>
          <li>Email : prem@gmail.com</li>
          <li>Contact : 7777777777</li>
        </ul>
      </div>
    );
  }
}
export default User;
