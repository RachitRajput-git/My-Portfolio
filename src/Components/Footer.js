import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../css/footer.css'


function Footer(props) {
    console.log(props)
    const { footer } = props
    const { socialLinks } = footer;
    return (
        <footer className="footer_wrap sectionBlock">
            <div className="container">
                <div className="f_top">
                    <div className="social_wrap wow fadeInUp">
                        <ul>
                            {socialLinks.map((links, index, social_Links) => {
                                let key = Object.keys(links)[0];
                                let linkUrl = social_Links[index][key];
                                return (
                                    <li key={links + index}>
                                        <Link to={{ pathname: linkUrl }}>
                                            <span className={key}></span>
                                        </Link>{" "}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="f_text_wrap wow fadeInUp">
                        <h3>Contact Us</h3>
                        <h5>{footer.email}</h5>
                    </div>

                </div>
                <div className="copyright_wrp wow fadeInUp">
                    <p>{footer.copyright}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
