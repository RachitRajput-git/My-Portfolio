import React from 'react'
import BigTitleCard from '../Components/BigTitleCard.jsx';

function Resume(props) {
    const { Details } = props;
    return (
        <BigTitleCard title="About" about={Details.About} />
    )
}

export default Resume
