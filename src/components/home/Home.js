import React, { useState, useEffect } from 'react';
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

export default function Home(props) {
    var view;
    const [base, setBase] = useState(true);
    const [git, setGit] = useState(false);
    const [cal, setCal] = useState(false);
    const {returnLogin} = props;
    const viewHandlerGit = () => {
        setBase(false);
        setGit(true);
    }
    const viewHandlerCal = () => {
        setBase(false);
        setCal(true);
    }

    const returnHome = () => {
        setBase(true);
        setGit(false);
        setCal(false);
    }



    if (base == true) {
        view = <Container>
                    <p onClick={returnLogin}><img src={signout} className="signout"/>Sign Out</p>
                    <Row>
                        <Col lg={6} md={6} sm={6} xs={6}>
                            <Card className='cardImage' onClick={viewHandlerGit}>
                                <Card.Img src={gitI} alt="Card image" className="imgGit" />
                            </Card>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6}>
                            <Card className='cardImage' onClick={viewHandlerCal}>
                                <Card.Img src={calendarI} alt="Card image" className="imgCal" />
                            </Card>
                        </Col>
                    </Row>
                </Container>
    } else {
        if (git == true) {
            view = <Github returnHome={returnHome}></Github>
        } else if(cal == true) {
            view = <Calendar returnHome={returnHome}></Calendar>
        }
    }

    return (
        <div>
            {view}
        </div>
    )
}