import React from "react";

// export default class Profile extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       data: null,
//     };
//     console.warn("constructor");
//   }
//   componentDidMount() {
//     this.setState({ data: "update" });
//     console.warn("componentDidMount");
//   }
//   render() {
//     console.warn("render");
//     return (
//       <div>
//         <h1>Life Cycle Method : componentDidMount</h1>
//       </div>
//     );
//   }
// }

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      active: null,
      who: null,
    };
    console.warn("constructor");
  }
  componentDidUpdate() {
    console.warn("componentDidUpdate");
    if (this.state.who == null) this.setState({ who: "Prem Singh" });
  }
  render() {
    console.warn("render");
    return (
      <div>
        <h1>Life Cycle Method : componentDidUpdate:: {this.state.who}</h1>
        <button
          onClick={() => {
            this.setState({ active: "yes" });
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}
