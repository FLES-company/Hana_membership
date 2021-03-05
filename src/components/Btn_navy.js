import React, { useState } from "react";
import "./Btn_navy.css";
import "./Guide_ui.css";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";


function Btn_navy() {
  const [value, setValue] = useState('로그인');

  const onChangeValue = e => { 
    if(document.querySelectorAll('div .Btn_navy [value="로그인"]')){
      setValue(e.target.value = "안뇽")
    }
    console.log(value)
  }

  return (
    <div className="Btn_navy">
      <input className="navy" type="button" value={value} onClick={onChangeValue}/>
    </div>
  );
}

export default Btn_navy;
