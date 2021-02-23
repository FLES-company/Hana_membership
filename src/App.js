import React from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom"
import Home from "./Home"
import Input_text from "./components/Input_text";
import Find_idpw from "./Find_idpw";

import "./App.css";



function App() {
  return (
    <Router>
        <main>
          <Route exact paht = "/" component={Home} />
          <Route path = "/input" component ={Input_text} />
          <Route path = "/find" component ={Find_idpw} />
        </main>
    </Router>
  
    
  )
}

export default App;
