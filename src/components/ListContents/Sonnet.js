import React, { useState } from 'react';

import { Accordion, Card, Button, Container, Row, Col, Toast } from 'react-bootstrap';
import logo from '../../logo.svg'
const Sonnet = () => {
    const [showA, setShowA] = useState(true);
    const [showB, setShowB] = useState(true);

    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);
    return (
        <Container>
            <h2>Accordion</h2>
            <Accordion>
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
            </Accordion>
            <h2>Toast</h2>
            <Row>
                <Col xs={6}>
                    <Toast show={showA} onClose={toggleShowA}>
                        <Toast.Header>
                            <img
                                src={logo}
                                className="App-logo sonnet"
                                alt=""
                            />
                            <strong className="mr-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                    </Toast>
                </Col>
                <Col xs={6}>
                    <Button onClick={toggleShowA}>
                        Toggle Toast <strong>with</strong> Animation
                    </Button>
                </Col>
                <Col xs={6} className="my-1">
                    <Toast onClose={toggleShowB} show={showB} animation={false}>
                        <Toast.Header>
                            <img
                                src={logo}
                                className="App-logo sonnet"
                                alt="Bootstrap"
                            />
                            <strong className="mr-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                    </Toast>
                </Col>
                <Col xs={6}>
                    <Button onClick={toggleShowB}>
                        Toggle Toast <strong>without</strong> Animation
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Sonnet;