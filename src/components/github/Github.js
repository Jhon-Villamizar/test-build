import React, { useState, useEffect } from 'react';
import './github.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import returnI from '../../assets/return.png';

export default function Github(props) {

    const [userName, setuSerName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [error, setError] = useState(null);
    const [listRepos, setListRepos] = useState([]);
    const { returnHome } = props;

    useEffect(() => {
        fetch(`https://api.github.com/search/users?q=${localStorage.email}`)
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    setError(data.message);
                } else {
                    setData(data.items[0]);
                    setError(null);
                    fetch(data.items[0].repos_url)
                        .then(res => res.json())
                        .then(y => {
                            setData2(y);
                        });
                }
            })
    }, []);

    const setData = ({ login, avatar_url }) => {
        setuSerName(login);
        setAvatar(avatar_url);
    };

    const setData2 = (y) => {
        setListRepos(y);
    };

    /*
    Funcion que agrega un input de busqueda
    */
    // const handleSubmit = (evt) => {
    //     evt.preventDefault();
    //     fetch(`https://api.github.com/search/users?q=${userInput}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.message) {
    //                 setError(data.message);
    //             } else {
    //                 setData(data.items[0]);
    //                 setError(null);
    //                 fetch(data.items[0].repos_url)
    //                     .then(res => res.json())
    //                     .then(y => {
    //                         setData2(y);
    //                     });
    //             }
    //         })
    // }

    const items = listRepos.map((repo) =>
        <li key={repo.full_name}>{repo.name}</li>
    );
    
    return (
        <div>
            <div className="navbar">Github Search
                <p onClick={returnHome}> <img src={returnI} />Volver</p>
            </div>
            {/* <div>
                <Container>
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Col lg={{ span: 4, offset: 4 }} md={{ span: 4, offset: 4 }} sm={{ span: 4, offset: 4 }} xs={{ span: 4, offset: 4 }}>
                                        <Form.Group controlId="formBasicName" className="search search-input">
                                            <Form.Control type="text" placeholder="Github user" name="github user" onChange={e => setUserInput(e.target.value)} />
                                        </Form.Group>
                                        <Button variant="primary" type="submit" className="search search-button">
                                            Search
                                    </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div> */}
            {error ? (<h1>{error}</h1>) : (
                <div>
                    <Container>
                        <Row>
                            <Col lg={{ span: 4, offset: 4 }} md={{ span: 4, offset: 4 }} sm={{ span: 4, offset: 4 }} xs={{ span: 4, offset: 4 }}>
                                <Accordion>
                                    <Card>
                                        <Card.Img variant="top" src={avatar} />
                                        <Card.Header>
                                            <Card.Title>{userName}</Card.Title>
                                        </Card.Header>
                                        
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                            Repos {listRepos.length}
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>{items}</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )}
        </div>
    )
}