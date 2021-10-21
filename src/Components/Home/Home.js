import React from 'react';
import Example from './Example/Example';
import MainHeader from './Header/MainHeader/MainHeader';
import Map from './Map/Map';
import Review from './Review/Review';
import ServiceCard from './ServiceCard/ServiceCard';
// import Voices from './Voices/Voices';
// import Workers from './Workers/Workers';


const Home = () => {
    return (
        <div className="home">
            <MainHeader></MainHeader>
            {/* <br />
            <Voices /> */}
            <ServiceCard></ServiceCard><br/><br/>
            <Example></Example><br/><br/>
            <Review></Review>
            <br/><br/><Map></Map>
            
        </div>
    );
};

export default Home;