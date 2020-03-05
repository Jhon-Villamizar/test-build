import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './components/signin/Signin';
import Signup from './components/signup/Signup';
import Github from './components/github/Github';
import Home from './components/home/Home';


function App() {
  var login;
  const [show, setShow] = useState(true);
  const [principal, setPrincipal] = useState(false);
  
  const loginHandler = () => {
    setShow(!show);
  }

  const goHome = () => {
    setPrincipal(true);
  }

  const returnLogin = () => {
    setPrincipal(false);
    setShow(true);
  }

  if (principal == true) {
    login = <Home returnLogin={returnLogin}></Home>
  } else {
    if (show==true) {
      login = <Signin loginHandler={loginHandler} goHome={goHome}></Signin>
    } else {
      login = <Signup loginHandler={loginHandler}></Signup>
    }
  }

  return (
        <div>
          {login}
        </div>
        
  );
}

export default App;
