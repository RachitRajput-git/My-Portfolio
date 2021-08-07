import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../css/card_2.css'

function Card2(props) {
    const { works } = props
    return (
        <div className="sectionBlock ">
            <div className="container card_2_wrap">
                <div className="row card_2">
                    <span>Portfolio</span>
                    <h2>Checkout a few of my works</h2>
                </div>
                <div className="row card_bottom">
                    {works.map((work, index) => {
                        return (
                            <div key={works[index].image + index} className="card_wrap wow">
                                <div className="img_wrap wow fadeInUp" n style={{ backgroundImage: `url(${works[index].image})` }}></div>
                                <div className="col_right wow fadeIn " >
                                    <h2>{works[index].tag}</h2>
                                    <h4>{works[index].title}</h4>
                                    <p>{works[index].description}</p>
                                    <p><Link to={{ pathname: works[index].link }}>wanna look...🧐🧐</Link></p>
                                </div>
                            </div>
                        )
                    })}

                </div>

            </div>
        </div>
    )
}

export default Card2
