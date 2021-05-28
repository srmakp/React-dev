import Home from "./cmp/Home";
import Profile from "./cmp/Profile";
import About from "./cmp/About";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Link to="">Home </Link>
          <Link to="/about">About </Link>
          <Link to="/profile">Profile </Link>

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
        </Router>

        {/* <Profile/>
   <Home/>
   <About/> */}
      </div>
    );
  }
}

export default App;
