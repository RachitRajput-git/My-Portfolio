import React from 'react'
import BigTitleCard from '../Components/BigTitleCard.jsx';
import ResumeCard from '../Components/ResumeCard.jsx';

function Resume(props) {
    const { Details } = props;
    return (
        <div className="resume-main-container">
        <BigTitleCard title="About" about={Details.About} />
        <ResumeCard resume={Details.Resume} />
        </div>
    )
}

export default Resume
