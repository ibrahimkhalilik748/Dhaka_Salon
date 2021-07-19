import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import LogIn from './Components/LogIn/LogIn';
import { createContext, useState } from 'react';
import NavBar from './Components/Home/Header/NavBar/NavBar';
import Admin from './Components/Admin/Admin';
import Footer from './Components/Home/Footer/Footer';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard';
import BookingForm from './Components/BookingForm/BookingForm';
import ServiceCard from './Components/Home/ServiceCard/ServiceCard';
import Booking from './Components/Dashboard/Booking/Booking';



export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <div className="App ">
      <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <LogIn />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <Route path="/bookingSeat">
              <ServiceCard></ServiceCard>
            </Route>
            <Route path="/bookingForm">
              <BookingForm></BookingForm>
            </Route>
            <Route path="/booking/:_id">
              <Booking></Booking>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </userContext.Provider>
    </div>
  );
}

export default App;
