import React from 'react';
import BigTitleCard from '../Components/BigTitleCard.jsx';
import Card2 from '../Components/Card2.js';
import CustomSlider from '../Components/Custom_Slider';
import Services from '../Components/Services.jsx';
import '../css/layout.css';


function Home(props) {
    const { Details } = props;
    return (
        <>
            <CustomSlider items={Details.SliderItems} />
            <BigTitleCard title="About" about={Details.About} />
            <Services title="My services" services={Details.Services} />
            <Card2 works={Details.Works} />
        </>
    )
}

export default Home
