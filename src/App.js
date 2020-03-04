import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './components/signin/Signin';
import Signup from './components/signup/Signup';


function App() {
  var login;
  const [show, setShow] = useState(true);
  console.log(show);
  
  const loginHandler = () => {
    setShow(!show);
  }

  if (show==true) {
    login = <Signin loginHandler={loginHandler}></Signin>
  } else {
    login = <Signup loginHandler={loginHandler}></Signup>
  }

  return (
    <Container className="justify-content-lg-center">
      <Row>
        {login}
        {/* <Signin onClick={() => setShow(show? true : false)}></Signin>
        <Signup></Signup> */}
      </Row>
    </Container>
  );
}

export default App;
