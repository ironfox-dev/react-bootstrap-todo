import React from 'react';

import { OverlayTrigger, Button, Tooltip, Popover } from "react-bootstrap";

const Tooltips = () => {
    const popover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">Popover right</Popover.Title>
          <Popover.Content>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
          </Popover.Content>
        </Popover>
    );
    return (
        <>
        <h2>Overlay</h2>
            {['top', 'right', 'bottom', 'left'].map((placement) => (
                <OverlayTrigger
                    key={placement}
                    placement={placement}
                    overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                            Tooltip on <strong>{placement}</strong>.
                        </Tooltip>
                    }
                >
                    <Button variant="secondary">Tooltip on {placement}</Button>
                </OverlayTrigger>
            ))}
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                <Button variant="success">Click me to see</Button>
            </OverlayTrigger>
        </>
    )
}

export default Tooltips;