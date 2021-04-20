import React from 'react';
import example from '../../image/oxana-melis-O59ygBaIv64-unsplash.jpg'
import './Example.css'

const Example = () => {
    return (
        <div className="container">
            <div className="row example">
                <div className="col-md-4">
                    <img className="img-fluid" src={example} />
                </div>
                <div className="col-md-6 text">
                    <h2>We Give You Comfort <span className="color">Haircut</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae suscipit necessitatibus fugiat praesentium alias perspiciatis accusantium sint illum, consequatur odio repellendus laudantium perferendis deleniti officia reiciendis exercitationem dolorem eius modi aut rem! Iste similique qui at iusto odit blanditiis dolorem molestias ratione amet debitis odio quidem, recusandae repellat harum consequatur et accusantium quod! Voluptatibus dolor in sed facilis laborum est nulla quod delectus doloremque, natus consequuntur magnam blanditiis animi ipsa odio assumenda? Praesentium, necessitatibus non reiciendis illum laborum sit dolore odio, magnam quidem</p>
                    <div className="row mt-4">
                        <div className="col-6">
                            <h3 className="color">1000+</h3>
                            <p>Happy Customer</p>
                        </div>
                        <div className="col-6">
                            <h3 className="color">100+</h3>
                            <p>Total Services</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Example;