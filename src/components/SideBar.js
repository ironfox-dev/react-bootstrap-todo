import React from 'react';

import { ListGroup, Row, Col, Tab } from 'react-bootstrap';
import Sonnet from './ListContents/Sonnet';
import Alerts from './ListContents/Alerts';
import CarouselGroup from './ListContents/CarouselGroup';
import Images from './ListContents/Images';
import Spinners from './ListContents/Spinners';
import ProgBars from "./ListContents/ProgBars";
import Tooltips from './ListContents/Tooltips';
import TabGroup from './ListContents/TabGroup';

const SideBar = () => {
    const data = [
        { name: 'Primary-Accordion-Toast', href: '#link1', variant: 'primary', component: <Sonnet /> },
        { name: 'Secondary-Alerts', href: '#link2', variant: 'secondary', component: <Alerts /> },
        { name: 'Success-Carousel', href: '#link3', variant: 'success', component: <CarouselGroup /> },
        { name: 'Danger-Images', href: '#link4', variant: 'danger', component: <Images /> },
        { name: 'Warning-Spinners', href: '#link5', variant: 'warning', component: <Spinners /> },
        { name: 'Info-ProgressBar', href: '#link6', variant: 'info', component: <ProgBars /> },
        { name: 'Light-Tooltips', href: '#link7', variant: 'light', component: <Tooltips /> },
        { name: 'Dark', href: '#link8', variant: 'dark', component: <TabGroup /> },
    ]

    return (
        <Tab.Container defaultActiveKey="#link1">
            <h1>List Group</h1>
            <Row className="m-auto listGroup">
                <Col sm={12} md={4}>
                    <ListGroup>
                        {data.map((item, index) => (<ListGroup.Item action variant={item.variant} href={item.href} key={index}>
                            {item.name}
                        </ListGroup.Item>))}
                    </ListGroup>
                </Col>
                <Col sm={12} md={8}>
                    {
                        data.map((item) => (
                            <Tab.Content>
                                <Tab.Pane eventKey={item.href}>
                                    {item.component}
                                </Tab.Pane>
                            </Tab.Content> 
                        ))
                    }
                </Col>
            </Row>
        </Tab.Container>
    )
}

export default SideBar;