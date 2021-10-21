import React from 'react';
import { Link } from 'react-router-dom';
import './MainHeader.css'

const MainHeader = () => {
    return (
        <div className="main-header mb-5"><br/>
            <h1>Hair Grow Your Personality</h1>
            <p  className="ml-5 pr-6">How many times have you been told "it's what's on the inside that counts"? Probably a lot. It's true. Your personality is the most important and unique thing about you. But it’s what’s on the outside that expresses your personality.</p>
            <Link to="/bookingSeat" className="btn btn-success">Booking Seat</Link>
        </div>
    );
};

export default MainHeader;