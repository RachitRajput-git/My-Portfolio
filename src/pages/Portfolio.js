import React from 'react';
import Card2 from '../Components/Card2.js';


function Portfolio(props) {
    const { Details } = props;
    return (
        <Card2 works={Details.Works} />
    )
}

export default Portfolio
