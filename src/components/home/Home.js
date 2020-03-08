import React, { useState} from 'react';
import './home.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import calendarI from '../../assets/calendar.png'
import gitI from '../../assets/github.png'
import Github from '../github/Github';
import Calendar from '../calendar/Calendar';
import signout from '../../assets/signout.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Home(props) {
    var view;
    const {returnLogin} = props;
    
    const oauthHandler = () => {
        window.location = "https://accounts.google.com/o/oauth2/auth?response_type=code&scope=https://www.googleapis.com/auth/calendar&redirect_uri=http://localhost:3000/calendar/&client_id=287236378304-d4t9icealf5mjuhq6g9in589jth6feui.apps.googleusercontent.com";
    }

    view = <Container>
                <Row>
                    <Col lg={6} md={6} sm={6} xs={6}>
                    <Link to="/github">
                        <Card className='cardImage' >
                            <Card.Img src={gitI} alt="Card image" className="imgGit" />
                        </Card>
                    </Link>
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6}>
                    <Link to="/calendar">
                            <Card className='cardImage' onClick={oauthHandler}>
                                <Card.Img src={calendarI} alt="Card image" className="imgCal" />
                            </Card>
                    </Link>
                    </Col>
                </Row>
            </Container>

    return (
        <Router>
            <div className="navbar">
              <Link to="/">
                <p>Home</p>
              </Link>
              <p onClick={returnLogin}><img src={signout} className="signout"/>Sign Out</p>
            </div>
            <Switch>
              <Route exact path="/">
                {view}
              </Route>
              <Route path="/github">
                <Github ></Github>
              </Route>
              <Route path="/calendar">
                <Calendar ></Calendar>
              </Route>
            </Switch>
        </Router>
      );
}