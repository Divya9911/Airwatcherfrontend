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

class App extends React.Component{
  render(){
    return(
      <div>
        <Router>
          <Header></Header>
          <Switch>    
              <Route exact path="/" component={Home}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/register" component={Register}/>  
              <PrivateRoute  path="/dashboard" component={Dashboard}/>
              <PrivateRoute  path="/watchedcity" component={Dashboard}/>
              <Route component={notfound}/>
          </Switch>
          <Footer></Footer>
        </Router>
      </div>
    )
  }
}

export default App;
