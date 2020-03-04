import React, {useState, useEffect} from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import logo from '../../assets/login.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import "./signin.scss";


export default function Signin(props) {
    const {loginHandler} = props;
    var emailVacio;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (email == '') {
            return emailVacio = <p>Campo Obligatorio</p>
        }
        console.log('email: '+email+' password: '+password)
    }
    return(
        <Col lg={{span:6, offset: 3}} md={{span:6, offset: 3}} sm={{span:6, offset: 3}} xs={12}>
            <Card className="card-in">
                <div className="logo">
                    <img src={logo}  alt="logo" />
                    <h2>Sign in</h2>
                </div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter Email" />
                        {emailVacio}
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                    </Form.Group>
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <Button variant="primary" type="submit">
                            Sign in
                            </Button>
                        </Col>
                        <Col lg={{span:6, offset: 6}} md={{span:6, offset: 6}} sm={{span:6, offset: 6}} xs={{span:6, offset: 6}}>
                            <a onClick={loginHandler}><p>Don't have an account? SignUp</p></a>
                        </Col>
                    </Row>
                    
                </Form>
            </Card>
            
        </Col>
    );
}
