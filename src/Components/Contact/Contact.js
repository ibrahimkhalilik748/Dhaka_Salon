import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="margin">
            <div className="Contact mt-5"><br />
                <div className="container">
                    <h1 className="fw-bold">GET IN <span className="headColor">TOUCH</span></h1><br />
                    <div className="row">
                        <div className="col-md-4 align">
                            <h3 className="fw-bold">DON'T BE SHY !</h3>
                            <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                            <div className="row">
                                <div className="col-2">
                                    <img className="img-fluid mt-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/512px-Gmail_icon_%282020%29.svg.png" alt="" />
                                </div>
                                <div className="col-10">
                                    <p style={{ fontSize: '14px' }}>Mail Me<br />
                                        ibrahimkhalilik748@gmail.com</p>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-2">
                                    <img className="img-fluid mt-2" src="https://i.pinimg.com/originals/84/4e/8c/844e8cd4ab26c82286238471f0e5a901.png" alt="" />
                                </div>
                                <div className="col-10">
                                    <p style={{ fontSize: '14px' }}>Call Me<br />
                                        +8801881805720</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 align">
                            <form>
                                <input type="name" name="name" placeholder="Your Name" />
                                <input type="email" name="email" placeholder="Your Email" />
                                <input type="subject" name="subject" placeholder="Your Subject" /> <br />
                                <textarea type="message" name="message" placeholder="Your Message" cols="60" rows="5"  ></textarea><br />
                                <button className="btn btn-success mt-2">Sent Message</button>
                            </form>
                        </div>
                    </div>

                    <div className="media d-flex justify-content-center mt-5">
                        <ul className="list-unstyled text-small row lift">
                            <li className="mb-1 col-2"><a className="text-decoration-none color" target="blank" href="https://www.facebook.com/Ibrahimkholil.Bangladesh" > <img src="https://cdn.icon-icons.com/icons2/2108/PNG/512/facebook_icon_130940.png" alt="" /> </a></li>
                            <li className="mb-1 col-2"><a className="text-decoration-none color" target="blank" href="https://www.instagram.com/ibrahim.khalil.ik/"><img src="https://image.flaticon.com/icons/png/512/174/174855.png" alt="" /></a></li>
                            <li className="mb-1 col-2"><a className="text-decoration-none color" target="blank" href="https://www.linkedin.com/in/ibrahim-khalil-4b4b3b205/"><img src="https://img.icons8.com/metro/452/linkedin.png" alt="" /></a></li>
                        </ul>

                        {/* <a href="https://www.facebook.com/ibrahim.kholil.74/" target="_blank"><img className="img-fluid" src="{facebook} " alt="" /></a>

                        <a href="https://www.linkedin.com/in/ibrahim-khalil-4b4b3b205/" target="_blank"><img className="img-fluid" src="{linkedin}" alt="" /></a>

                        <a href="https://www.instagram.com/ibrahim.khalil.ik/" target="_blank"><img className="img-fluid" src="{instagram}" alt="" /></a> */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;