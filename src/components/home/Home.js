import React, { useState, useEffect } from 'react';
import './home.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion'
import logo from '../../assets/login.png';

export default function Home() {
    const [name, setName] = useState('');
    const [userName, setuSerName] = useState('');
    const [followers, setFollowers] = useState('');
    const [following, setFollowing] = useState('');
    const [repos, setRepos] = useState('');
    const [avatar, setAvatar] = useState('');
    const [userInput, setUserInput] = useState('');
    const [error, setError] = useState(null);
    const [loquesea, setloquesea] = useState();
    useEffect(() => {
        fetch("http://api.github.com/users/example")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setData(data)
            });
    }, []);

    const setData = ({ name, login, followers, following, public_repos, avatar_url }) => {
        setName(name);
        setuSerName(login);
        setFollowers(followers);
        setFollowing(following);
        setRepos(public_repos);
        setAvatar(avatar_url);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(userInput);

        fetch(`https://api.github.com/search/users?q=${userInput}`)
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    setError(data.message);
                } else {
                    console.log(data.items[0]);
                    setData(data);
                    setError(null);
                    fetch(data.items[0].repos_url).then(res => res.json()).then(y => {
                        setloquesea(y);
                        console.log(loquesea);
                    });

                }

            })
    }
    return (
        <div>
            <div className="navbar">Github Search</div>
            <div>
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
            </div>
            {error ? (<h1>{error}</h1>) : (
                <div>
                    <Container>
                        <Row>
                            <Col lg={{ span: 4, offset: 4 }} md={{ span: 4, offset: 4 }} sm={{ span: 4, offset: 4 }} xs={{ span: 4, offset: 4 }}>
                                <Card>
                                    <Card.Img variant="top" src={avatar} />
                                    <Card.Body>
                                        <Card.Title>{name}</Card.Title>
                                        <Card.Title>{userName}</Card.Title>
                                        <Card.Text>
                                            <a>{followers} Followers</a>
                                        </Card.Text>
                                        <Card.Text>
                                            <a>{repos} Repos</a>
                                        </Card.Text>
                                        <Card.Text>
                                            <a>{following} Following</a>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                {/* <Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion> */}
                            </Col>
                        </Row>
                    </Container>
                </div>
            )}

        </div>
    )
}