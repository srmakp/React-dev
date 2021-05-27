import logo from "./logo.svg";
import "./App.css";

import Profile from "./Profile.js";
import Props from "./Props";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Props text={{ name: "Prem singh" }} data="props Data" />
      </header>
    </div>
  );
}

export default App;
