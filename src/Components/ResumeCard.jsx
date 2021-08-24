import React from "react";
import { Link } from "react-router-dom";
import "../css/resumeCard.css";
function ResumeCard(props) {

const { resume } = props;

/**  ExperienceCard Component */
const ExperienceCard = (params) => {
const { expData } = params;
return (
    <div className="expcard">
        <h1>Experience</h1>

        {expData.map((data, index) => {
            return (
                <div key={data.company} className="expcard-wrap">
                    <div className="expcard-inner">
                        <div className="exp-header clearfix">
                            <div className="designation-wrap">
                                <h5 className="designation">{data.designation}</h5>
                                <span className="period">({data.period})</span>
                            </div>
                            <div className="comapny-wrap">
                                <p className="company-name">{data.company}</p>
                                <span className="period-to-from">
                                    {data.from} - {data.to}
                                </span>
                                <span className="company-location">{data.location}</span>
                            </div>
                        </div>
                        <p>{data.description}</p>
                        <ul>
                            {data.workingAreas !== undefined &&
                                data.workingAreas.map((content, i) => {
                                    return <li>{content}</li>;
                                })}
                        </ul>
                    </div>
                </div>
            );
        })}
    </div>
);
};

/** Education Card Component */
const Education = (params) => {
const { eduData } = params;
return (
    <div className="edu_main-wrap">
        <h1>Education</h1>
        {eduData.map((Data, i) => {
            return (
                <div className="edu-inner" key={Data.year}>
                    <div className="edu-left-col">
                        <h5>{Data.education}</h5>
                        <p>{Data.address}</p>
                        <p>{Data.year}</p>
                    </div>
                    <div className="edu-right-col">
                        <p>Percentage</p>
                        <p>{Data.percentage}</p>
                    </div>
                </div>
            );
        })}
    </div>
);
};

/** Technologies Component */
const Technologies = (params) => {
const { techData } = params;
return (
    <div className="tech_wrap">
        <h1>TECHNOLOGIES</h1>
        {Object.keys(techData).map((key, i, array) => {
            return (
                <div className="tect_inner" key={key}>
                    <h5>{key}</h5>
                    <p>
                        {techData[key].map((val, i) => {
                            return (
                                <span key={val}>
                                    {i > 0 && `,`} {val}
                                </span>
                            );
                        })}
                    </p>
                </div>
            );
        })}
    </div>
);
};

/** Additional Info Component */
const AdditionalInfo = (params) => {
const { prop, title } = params;
console.log(prop, title);
return (
    <div className="addInfo_wrap">
        <h1>{title}</h1>
        <div className="addInfo_inner">
            <ul>
                {prop.map((data, i) => {
                    return (
                        <li key={data}>
                            {data}
                        </li>
                    )
                })
                }
            </ul>
        </div>
    </div>
)
};

return (
<div className="resume_wrap">
    
    <div className="container">
        <div className="resume-inner">
 
        <Link  class="resume_link" to={{ pathname: resume.Resume_HardCopy }}  target="_blank" download></Link>
            <div className="r-top-header">
                <h1>{resume.name}</h1>
                <h2>{resume.designation}</h2>
                <p>
                    +91 &nbsp;
                    <span className="phone-info">
                        {resume.phone_1}, {resume.phone_2}
                    </span>
                    <span className="email-info">{resume.email}</span>
                </p>
                <p className="address-info">{resume.address}</p>
            </div>
            {/* main-content */}
            <div className="r-main-wrap clearfix">
                <div className="main-content">
                    <div className="summary-item">
                        <h1>SUMMARY</h1>
                        <p>{resume.summary_1}</p>
                        <p>{resume.summary_2}</p>
                    </div>
                    <ExperienceCard expData={resume.experience} />
                    {/* Education  */}
                    <Education eduData={resume.Education} />
                </div>

                <div className="aside-wrap">
                    <Technologies techData={resume.Technologies} />
                    <AdditionalInfo prop={resume.Passion} title="Passion" />
                    <AdditionalInfo prop={resume.Language} title="Language" />
                </div>
            </div>
        </div>
    </div>
</div>
);
}

export default ResumeCard;
