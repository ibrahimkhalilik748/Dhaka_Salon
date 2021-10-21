import React, { useContext, useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { userContext } from '../../../../App';
import './Navbar.css';

const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [admin, setAdmin] = useState(false)
    useEffect(() => {
        fetch(`https://stormy-savannah-45858.herokuapp.com/isAdmin`,
            {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ email: loggedInUser.email })
            })
            .then(res => res.json())
            .then(data => setAdmin(data));
    }, [])
    return (
        <div className="po">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container container-fluid">
                    <Link to="/home" class="navbar-brand"><h2 style={{ fontSize: '40px' }}>Dhaka Salon</h2></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarNav">
                        <ul class="navbar-nav float">
                            <li class="nav-item">
                                <Link class="btn btn-outline-success" to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="btn btn-outline-success" to="/services">Services</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="btn btn-outline-success" to="/contact">Contact</Link>
                            </li>
                            <li class="nav-item"> 
                                <Link class="btn btn-outline-success" to="/dashboard/review">Dashboard</Link>
                            </li>

                            {/* {admin &&
                                <div> */}
                            <li class="nav-item">
                                <Link class="btn btn-outline-success" to="/admin">Admin</Link>
                            </li>
                            {/* </div>
                            } */}

                            {/* <li class="nav-item">
                                <Link class=" btn btn-success bg" to="/login">Log In</Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    );
};

export default NavBar;