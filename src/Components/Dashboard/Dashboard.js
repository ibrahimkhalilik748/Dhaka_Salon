import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import OrderList from '../Admin/Order List/OrderList';
import Review from './AddReview/AddReview';
import Booking from './Booking/Booking';
import './Dashboard.css'


const Dashboard = () => {
    return (
        <div className="dashboard  pb-1">
            <Router>
                <div>
                    <div className="row">
                        <div className="col-md-2 adminBody">
                            <div className="optionsBody pt-1">
                                <ul>
                                    {/* <li className="options"><Link to="/dashboard/review">Review</Link></li> */}
                                    <li className="options"><Link to="/dashboard/review">Review</Link></li>
                                    <li className="options"><Link to="/dashboard/orderList">Oder List</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#d8e2dc' }} className="col-md-10 option2">
                            <Switch>
                                <Route exact path="/dashboard/review">
                                    <Review></Review>
                                </Route>
                                <Route path="/dashboard/review">
                                    <Review></Review>
                                </Route>
                                <Route path="/dashboard/orderList">
                                    <OrderList></OrderList>
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>

            </Router>
        </div>
    );
};

export default Dashboard;