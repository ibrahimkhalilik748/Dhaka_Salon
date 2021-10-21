import React from 'react';
import Review from '../Home/Review/Review';
import ServiceCard from '../Home/ServiceCard/ServiceCard';

const About = () => {
    return (
        <div className=" margin">
            <ServiceCard></ServiceCard>
            <br /><br />
            <Review></Review>
        </div>
    );
};

export default About;