import './App.css';
import React from 'react';
import Login from './Components/login/Login';
import Home from './Components/home/Home';
import Register from './Components/register/Register';
import Dashboard from './Components/dashboard/Dashboard';
import {BrowserRouter as Router,Route,Switch}  from 'react-router-dom';
import notfound from './Components/notfound/NotFound';
import PrivateRoute from './PrivateRoute'
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import States from './Components/states/States';
import City from './Components/city/City';
import CityDetails from './Components/city/CityDetails';
import Favourite from './Components/favourite/Favourite';

class App extends React.Component{
  render(){
    return(
      <div>
        <Router>
          
          <Switch>    
              <Route exact path="/" component={Home}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/register" component={Register}/>  
              <PrivateRoute  path="/dashboard" component={Dashboard}/>
              <PrivateRoute  path="/favouriteCity" component={Favourite}/>
              <Route exact path ="/state/:countryname" component = {States}/>
              <Route exact path ="/city/:countryname/:statename" component ={City}/>
              <Route exact path ="/citydetails/:cityname/:statename/:countryname" component ={CityDetails}/>
              <Route component={notfound}/>
          </Switch>
          <Footer></Footer>
        </Router>
      </div>
    )
  }
}

export default App;
