import './App.css';
import React from 'react';
import Login_btn from './components/Login_button'
import Signup_btn from './components/SignUp_button'
import Social_login_btn from './components/Social_login_button'
import Input_text from './components/Input_text'

function App() {
  return (
    <div className="App">
      <div className="App-Btn">
      <Login_btn />
      <Signup_btn />
      <Social_login_btn />
      <Input_text />
     </div>
    </div>
  );
}

export default App;
