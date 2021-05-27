import React from "react";

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
    console.warn("constructor");
  }
  componentDidMount() {
    this.setState({ data: "update" });
    console.warn("componentDidMount");
  }
  render() {
    console.warn("render");
    return (
      <div>
        <h1>Life Cycle Method : componentDidMount</h1>
      </div>
    );
  }
}
