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

export default function Home() {
    var view;
    const [base, setBase] = useState(false);
    const [git, setGit] = useState(false);
    const [cal, setCal] = useState(true);

    const viewHandlerGit = () => {
        setBase(false);
        setGit(true)
    }
    const viewHandlerCal = () => {
        setBase(false);
        setCal(true)
    }



    if (base == true) {
        view = <Container>
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
            view = <Github></Github>
        } else if(cal == true) {
            view = <Calendar></Calendar>
        }
    }

    return (
        <div>
            {view}
        </div>
    )
}