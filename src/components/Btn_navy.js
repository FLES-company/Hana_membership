import React, { useState, useEffect, useHistory } from "react";
import "./Btn_navy.css";
import "./Guide_ui.css";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";

function Btn_navy() {

  const [value, setValue] = useState('');  
  const path = window.location.pathname
  const handleChange = e => { 
    if(path == '/login'){
      setValue(e.target.value = "로그인")
    }
    else if(path == '/find'){
      setValue(e.target.value = "아이디찾기")
    }
    console.log('완료')
    }

  return (
    <div className="Btn_navy">
      <input className="navy" type="button" value={value} onClick={handleChange}/>
    </div>
  );
}

export default Btn_navy;
