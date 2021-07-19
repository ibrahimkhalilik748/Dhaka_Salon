import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css'

const ServiceCard = () => {
    const [userServices, setUserServices] = useState([])
    useEffect(() => {
        fetch('https://stormy-savannah-45858.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setUserServices(data))

    }, [])

    return (
        <div className="container">
            <h1>Services</h1><br/>
            <div className="row">
                {
                    userServices.map(service =>
                        <div className="col-md-4 mt-5">
                            <div className="service">
                                <img src={service.imageURL} class="img-fluid" />
                                <h5 className="mt-3">{service.title}</h5>
                                <p>{service.description}</p>
                                <div className="row">
                                    <div className="col-2">
                                        <h4>${service.servicePrice}</h4>
                                    </div>
                                    <div className="col-8">
                                    <Link to={`/booking/${service._id}`} class="btn btn-success">Booking Seat</Link>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    )
                }
            </div>
        </div>

    );
};

export default ServiceCard;