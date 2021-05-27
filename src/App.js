import logo from "./logo.svg";
import "./App.css";

import Profile from "./Profile.js";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Profile text="function Profile component" />
      </header>
    </div>
  );
}

export default App;
