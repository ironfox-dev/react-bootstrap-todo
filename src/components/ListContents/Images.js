import React from 'react';

import {Container, Row, Col, Image } from 'react-bootstrap';
import img from '../../assets/images/1.jpg';

const Images = () => {
    return (
        <Container>
            <Row>
                <Col xs={6} md={4}>
                    <Image src={img} width={100} height={100} rounded />
                </Col>
                <Col xs={6} md={4}>
                    <Image src={img} width={150} height={150} roundedCircle />
                </Col>
                <Col xs={6} md={4}>
                    <Image src={img} width={100} height={100} thumbnail />
                </Col>
                <Col xs={6} md={4}>
                    <Image src={img} fluid />
                </Col>
            </Row>
        </Container>
    )
}

export default Images;