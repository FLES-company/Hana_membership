import React from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import Login from "./components/Login";
import Login_main from "./Login_main";
import SignUp from "./SignUp";
import SignUp_complete from "./SignUp_complete";
import Find_idpw from "./Find_idpw";
import Find_auth from "./Find_auth";
import Find_id_complete from "./Find_id_complete";
import Find_pw_reset from "./Find_pw_reset";
import Splash from "./Splash";
import Order from "./Order";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Tab4 from "./Tab4";
import Tab5 from "./Tab5";

import Guide_ui from "./components/Guide_ui";


import "./App.css";


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/splash" component={Splash} />
        <Route path="/login" component={Login} />
        <Route path="/loginMain" component={Login_main} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signUpComplete" component={SignUp_complete} />
        <Route path="/find" component={Find_idpw} />
        <Route path="/findAuth" component={Find_auth} />
        <Route path="/findidComplete" component={Find_id_complete} />
        <Route path="/findpwReset" component={Find_pw_reset} />
        <Route path="/order" component={Order} />

        {/* Tab1 : 호가 */}
        <Route path="/tab1" component={Tab1} />
        {/* Tab2 : 차트 */}
        <Route path="/tab2" component={Tab2} />
        {/* Tab3 : 정보 */}
        <Route path="/tab3" component={Tab3} />
        {/* Tab4 : 매도 */}
        <Route path="/tab4" component={Tab4} />
        {/* Tab4 : 매수 */}
        <Route path="/tab5" component={Tab5} />

        {/* Guideui */}
        <Route path="/Guide_ui" component={Guide_ui} />
        
      </div>
    </Router>
  );
}

export default App;
