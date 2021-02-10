import React from 'react';

import { Container, ProgressBar } from 'react-bootstrap';

const ProgBars = () => {
    const now = 60;
    const progressInstance = <ProgressBar now={now} label={`${now}%`} srOnly />;
    return (
        <Container>
            {progressInstance}
            <h2>Contextual alternatives</h2>
            <ProgressBar>
                <ProgressBar variant="warning" now={60} />
                <ProgressBar variant="danger" now={80} />
            </ProgressBar>
            <h2>Striped</h2>
            <ProgressBar>
                <ProgressBar striped variant="success" now={40} />
                <ProgressBar striped variant="info" now={20} />
                <ProgressBar striped variant="warning" now={60} />
                <ProgressBar striped variant="danger" now={80} />
            </ProgressBar>
            <h2>Aminated</h2>
            <ProgressBar>
                {/* Animated */}
                <ProgressBar animated now={45} />
            </ProgressBar>
            <h2>Stacked</h2>
            <ProgressBar>
                <ProgressBar striped variant="success" now={35} key={1} />
                <ProgressBar variant="warning" now={20} key={2} />
                <ProgressBar striped variant="danger" now={10} key={3} />
            </ProgressBar>
        </Container>
    )
}

export default ProgBars;