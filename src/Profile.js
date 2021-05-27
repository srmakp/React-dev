import React from "react";
//Event handling with class component
// export default class Profile extends React.Component {
//   testFun() {
//     alert("Test Fun");
//   }

//   render() {
//     return (
//       <div>
//         <h1>Profile</h1>
//         <button onClick={this.testFun.bind()}>Click me 1</button>
//         <button onClick={() => this.testFun()}>Click me 2</button>
//       </div>
//     );
//   }
// }

//Event handling with function component

export default function Profile() {
  function testFun() {
    alert("test fun");
  }
  return (
    <div>
      <h1>Profile</h1>
      <button onClick={testFun}>Click me</button>
    </div>
  );
}
