import React from 'react';
import Services from '../Components/Services.jsx';

function Service(props) {
    const { Details } = props;
    return (
        <Services title="My services" services={Details.Services} />
    )
}

export default Service
