import React from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import Input_text from "./components/Input_text";
import Find_idpw from "./Find_idpw";
import Find_auth from "./Find_auth";
import Find_id_complete from "./Find_id_complete";
import Find_pw_reset from "./Find_pw_reset";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Input_text} />
        <Route path="/find" component={Find_idpw} />
        <Route path="/findAuth" component={Find_auth} />
        <Route path="/findidComplete" component={Find_id_complete} />
        <Route path="/findpwReset" component={Find_pw_reset} />
      </div>
    </Router>
  );
}

export default App;
