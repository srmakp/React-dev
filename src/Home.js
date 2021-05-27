import React from "react";
class Profile extends React.Component {
  constructor() {
    super(); //need to call super else get error
  }
  componentDidMount() {
    console.warn("called life");
  }
  render() {
    return (
      <div>
        <h1>Profile Component</h1>
      </div>
    );
  }
}

export default Profile;

//class component//
