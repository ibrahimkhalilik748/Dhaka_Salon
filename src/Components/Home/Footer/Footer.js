import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="pb-4 my-md-5 footer">
            <div className="row">
                <div className="col-md-3 pt-5">
                    <h5 className="color">Features</h5>
                    <ul className="list-unstyled text-small">
                        <li className="mb-1"><a className="text-decoration-none color" href="#">Cool stuff</a></li>
                        <li className="mb-1"><a className="text-decoration-none color" href="#">Random feature</a></li>
                        <li className="mb-1"><a className="text-decoration-none color" href="#">Team feature</a></li>
                        <li className="mb-1"><a className="text-decoration-none color" href="#">Stuff for developers</a></li>
                        <li className="mb-1"><a className="text-decoration-none color" href="#">Another one</a></li>
                        <li className="mb-1"><a className="text-decoration-none color" href="#">Last time</a></li>
                    </ul>
                </div>
                <div className="col-md-3 pt-5">
                    <h5 className="color">Resources</h5>
                    <ul className="list-unstyled text-small">
                        <li className="mb-1"><a className="text-decoration-none color" href="#">Resource</a></li>
                        <li className="mb-1"><a className="text-decoration-none color" href="#">Resource name</a></li>
                        <li className="mb-1"><a className="text-decoration-none color" href="#">Another resource</a></li>
                        <li className="mb-1"><a className="text-decoration-none color" href="#">Final resource</a></li>
                    </ul>
                </div>
                <div className="col-md-3 pt-5">
                    <h5 className="color">About</h5>
                    <ul className="list-unstyled text-small">
                        <li className="mb-1"><a className="text-decoration-none color" href="#">Team</a></li>
                        <li className="mb-1"><a className="text-decoration-none color" href="#">Locations</a></li>
                        <li className="mb-1"><a className="text-decoration-none color" href="#">Privacy</a></li>
                        <li className="mb-1"><a className="text-decoration-none color" href="#">Terms</a></li>
                    </ul>
                </div>
                <div className="col-md-3 pt-5">
                    <h5 className="color">Our Social Media</h5>
                    <ul className="list-unstyled text-small row lift">
                        <li className="mb-1 col-2"><a className="text-decoration-none color" target="_blank" href="https://www.facebook.com/Ibrahimkholil.Bangladesh"> <img src="https://cdn.icon-icons.com/icons2/2108/PNG/512/facebook_icon_130940.png" alt="" /> </a></li>
                        <li className="mb-1 col-2"><a className="text-decoration-none color" target="_blank" href="https://www.instagram.com/ibrahim.khalil.ik/"><img src="https://image.flaticon.com/icons/png/512/174/174855.png" alt="" /></a></li>
                        <li className="mb-1 col-2"><a className="text-decoration-none color" target="_blank" href="https://www.linkedin.com/in/ibrahim-khalil-4b4b3b205/"><img src="https://img.icons8.com/metro/452/linkedin.png" alt="" /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;