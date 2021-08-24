import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import '../css/bigTitleCard.css'


function BigTitleCard(props) {
    const { title, about } = props;
    const socialLinks = about.socialLinks;
    return (
        <div className="big_title_card">
            <div className="container">
                <div className="row">
                    <div
                        className="col col_left"
                        style={{ backgroundImage: `url(${about.image})` }}
                    ></div>
                    <div className="col col_middle"></div>
                    <div className="col col_right wow fadeIn   ">
                        <h1>{title}</h1>
                        <div className="desc">
                            <h2>{about.heading}</h2>
                            <p>{about.description}</p>
                            <ul>
                                {socialLinks.map((links, index, social_Links) => {
                                    let key = Object.keys(links)[0];
                                    let linkUrl = social_Links[index][key];
                                    return (
                                        <li key={links + index}>
                                            <Link to={{ pathname: linkUrl }} target="_blank"> 
                                                <span className={key}></span>
                                            </Link>{" "}
                                        </li>
                                    );
                                })}
                            </ul>
                            <h5>Contact me here!</h5>
                            <p>Email :
                                <Link to={{ pathname: `mailto:${about.contactInfo.email}` }} target="_blank">{about.contactInfo.email}</Link>
                            </p>
                            <p>Mobile :
                                <Link to={{ pathname: `phone:${about.contactInfo.mobile}` }} target="_blank" >
                                    {about.contactInfo.mobile}</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BigTitleCard;
