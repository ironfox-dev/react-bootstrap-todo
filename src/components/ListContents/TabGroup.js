import React, { useState } from 'react';

import { Tabs, Tab } from 'react-bootstrap';
import Sonnet from './Sonnet';
import Alerts from './Alerts';
import Images from './Images';
import Spinners from './Spinners';

const TabGroup = () => {
    const [key, setKey] = useState('home')
    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
        >
            <Tab eventKey="home" title="Home">
                <Spinners />
                <Sonnet />
            </Tab>
            <Tab eventKey="profile" title="Profile">
                <Alerts />
            </Tab>
            <Tab eventKey="contact" title="Contact">
                <Images />
            </Tab>
        </Tabs>
    )
}

export default TabGroup;
