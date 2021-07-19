import React, { useContext, useEffect, useState } from 'react';
import './Admin.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import OrderList from './Order List/OrderList';
import AddService from './Add Service/AddService';
import MakeAdmin from './Make Admin/MakeAdmin';
import ManageServices from './Manage Services/ManageServices';
import AddWorkers from './AddWorkers/AddWorkers';
import { userContext } from '../../App';
import Home from '../Home/Home';
import Review from '../Dashboard/AddReview/AddReview';


const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [admin, setAdmin] = useState(false)
    useEffect(() => {
        fetch(`https://stormy-savannah-45858.herokuapp.com/admin`,
            {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ email: loggedInUser.email })
            })
            .then(res => res.json())
            .then(data => {
                setAdmin(data)
                console.log(data);
            });
    }, [])
    return (
        <div className="mt-5  pb-1">
            <Router>
                <div>
                    <div className="row">
                        <div className="col-md-2 adminBody">
                            <div className="optionsBody pt-1">
                                <ul>
                                    {/* <li className="options"><Link to="/review">Add Review</Link></li>
                                    <li className="options"><Link to="/orderList">Booking</Link></li> */}

                                    <li className="options"><Link to="/orderList">Order List</Link></li>
                                    <li className="options"><Link to="/addService">Add Service</Link></li>
                                    <li className="options"><Link to="/makeAdmin">Make Admin</Link></li>
                                    <li className="options"><Link to="/manageServices">Manage Services</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#d8e2dc' }} className="col-md-10 option2">
                            <Switch>
                                <Route exact path="/">
                                    <AddService></AddService>
                                </Route>
                                <Route path="/addService">
                                    <AddService></AddService>
                                </Route>
                                <Route path="/orderList">
                                    <OrderList></OrderList>
                                </Route>
                                <Route path="/makeAdmin">
                                    <MakeAdmin></MakeAdmin>
                                </Route>
                                <Route path="/manageServices">
                                    <ManageServices></ManageServices>
                                </Route>
                                <Route path="/addWorkers">
                                    <AddWorkers></AddWorkers>
                                </Route>
                                {/* <Route path="/review">
                                    <Review></Review>
                                </Route> */}
                            </Switch>
                        </div>
                    </div>
                </div>

            </Router>
        </div>


    );
};

export default Admin;