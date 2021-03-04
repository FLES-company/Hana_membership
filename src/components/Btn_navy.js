import React, { useState } from "react";
import "./Btn_navy.css";
import "./Guide_ui.css";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";


function Btn_navy() {
  const [value, setValue] = useState('');

  const onChangeValue = e => { 
    setValue(e.target.value)
    console.log(setValue(e.target.value))
  }

  return (
    <div className="Btn_navy">
      <input className="navy" type="button" value={value} onClick={onChangeValue}/>
    </div>
  );
}

export default Btn_navy;
