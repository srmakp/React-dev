import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.userRef = React.createRef();
  }
  editVal() {
    // console.log(this.userRef);
    //this.userRef.current.focus();
    this.userRef.current.value = "2000";
  }
  render() {
    return (
      <div>
        <h1>Ref in react</h1>
        <input ref={this.userRef} type="text" name="user" />
        <button onClick={() => this.editVal()}>Click me</button>
      </div>
    );
  }
}
