import React from "react";
import '../css/services.css';

function Services(props) {
    const { title, services } = props;
    const { first, second, third } = services
    return (
        <div className="sectionBlock">
            <div className="container">
                <div className="s_heading row">
                    <span>What i do</span>
                    <h1 className="wow fadeInUp">{title}</h1>
                </div>
                <div className="row">
                    <div className="col col-1 wow fadeInLeft ">
                        <div className="icon_wrap">
                            <span className="icon-layers"></span>
                        </div>
                        <div className="media-body">
                            {first.map((service, index) => {
                                return (
                                    <h3 key={service + index} className="heading">{service}</h3>
                                )
                            })}
                        </div>
                    </div>
                    <div className="col col-2 wow fadeIn">
                        <div className="icon_wrap">
                            <span className="icon-layers gears"></span>
                        </div>
                        <div className="media-body">
                            {second.map((service, index) => {
                                return (
                                    <h3 key={service + index} className="heading">{service}</h3>
                                )
                            })}
                        </div>
                    </div>
                    <div className="col col-3 wow fadeInRight">
                        <div className="icon_wrap">
                            <span className="icon-layers code"></span>
                        </div>
                        <div className="media-body">
                            {third.map((service, index) => {
                                return (
                                    <h3 key={service + index} className="heading">{service}</h3>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
