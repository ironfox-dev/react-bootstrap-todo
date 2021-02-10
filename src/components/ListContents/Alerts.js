import React from 'react';

import {Alert} from 'react-bootstrap';

const Alerts = () => {
    
    return (
        [
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
          ].map((variant, idx) => (
            <Alert key={idx} variant={variant}>
              This is a {variant} alert—check it out!
            </Alert>
          ))
    )
}

export default Alerts;