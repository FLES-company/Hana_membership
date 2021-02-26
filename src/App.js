import React from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import Input_text from "./components/Input_text";
import Login_main from "./Login_main";
import SignUp from "./SignUp";
import Find_idpw from "./Find_idpw";
import Find_auth from "./Find_auth";
import Find_id_complete from "./Find_id_complete";
import Find_pw_reset from "./Find_pw_reset";
import Splash from "./Splash";
import Order from "./Order";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/splash" component={Splash} />
        <Route path="/login" component={Input_text} />
        <Route path="/loginMain" component={Login_main} />
        <Route path="/signup" component={SignUp} />
        <Route path="/find" component={Find_idpw} />
        <Route path="/findAuth" component={Find_auth} />
        <Route path="/findidComplete" component={Find_id_complete} />
        <Route path="/findpwReset" component={Find_pw_reset} />
        <Route path="/order" component={Order} />
        <Route path="/tab1" component={Tab1} />
        <Route path="/tab2" component={Tab2} />
        
      </div>
    </Router>
  );
}

export default App;
