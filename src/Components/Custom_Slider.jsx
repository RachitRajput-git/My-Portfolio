import React, { useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../css/c_slider.css";
import Slider from "react-slick";
import WOW from "wow.js";


function CustomSlider(props) {
    useEffect(() => {
        const wow = new WOW();
        wow.init();
    }, []);

    const { items } = props;
    const setting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    /**  iterate Slider items and make elements of slider*/
    const SliderItems = (items_) => {
        return (
            <Slider {...setting}>
                {items_.items.map((item, index) => {
                    return (
                        <div key={item + index}>
                            <div className="slider_wrap">
                                <div className="slider_inner">
                                    <p className={{ index } + 1 ? ' wow fadeInUp' : 'wow fadeIn'}>
                                        <Link to="/">{item.Text_1}</Link>
                                    </p>
                                    <h1 className={{ index } + 1 ? ' wow fadeInUp' : 'wow fadeIn'}>{item.Text_2}</h1>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        );
    };

    return (
        <div className="custom_slider">
            {/*Slider items  */}
            <SliderItems items={items} />
        </div>
    );
}

export default CustomSlider;
