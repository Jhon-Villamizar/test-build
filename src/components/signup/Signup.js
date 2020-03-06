import React, {useState} from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import logo from '../../assets/login.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./signup.scss";


export default function Signup(props) {

    const {loginHandler} = props;
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        localStorage.setItem('name',name);
        localStorage.setItem('lastName',lastName);
        localStorage.setItem('email',email);
        localStorage.setItem('password',password);
        loginHandler();
    }

    return(
        <Container className="justify-content-lg-center">
            <Row>
                <Col lg={{span:6, offset: 3}} md={{span:6, offset: 3}} sm={{span:6, offset: 3}} xs={12}>
                    <Card className="card-up">
                        <div className="logo">
                            <img src={logo}  alt="logo" />
                            <h2>Sign Up</h2>
                        </div>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col lg={6} md={6} sm={6} xs={6}>
                                <Form.Group controlId="formBasicName">
                                    <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} placeholder="First Name" />
                                    {!name ? <p className="field">Obligatory field</p> : ''}
                                </Form.Group>
                                </Col>
                                <Col lg={6} md={6} sm={6} xs={6}>
                                    <Form.Group controlId="formBasicLastName">
                                        <Form.Control type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last Name" />
                                        {!lastName ? <p className="field">Obligatory field</p> : ''}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter Email" />
                                {!email ? <p className="field">Obligatory field</p> : ''}
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)}  placeholder="Password" />
                                {!password ? <p className="field">Obligatory field</p> : ''}
                            </Form.Group>
                            <Row>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                    <Button variant="primary" type="submit">
                                    Sign Up
                                    </Button>
                                </Col>
                                <Col lg={{span:6, offset: 6}} md={{span:6, offset: 6}} sm={{span:6, offset: 6}} xs={{span:6, offset: 6}}>
                                    <a onClick={loginHandler}><p>Already have account? Sign In</p></a>
                                </Col>
                            </Row>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}