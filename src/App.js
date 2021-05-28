import "./App.css";
import User from "./User";
import ErrorBound from "./ErrorBound";
function App() {
  return (
    <div className="App">
      <h1>Hello Rapid</h1>
      <ErrorBound>
        {" "}
        <User />
      </ErrorBound>
    </div>
  );
}

export default App;
