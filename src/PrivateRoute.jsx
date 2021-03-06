import React from 'react'
import { Redirect,Route } from 'react-router-dom';


export default function PrivateRoute({component : Component,...restall})
 {
  
    return (<Route {...restall} render={
      (routeprops)=>
      {
    return    sessionStorage.getItem("isAuthenticated")==="true"?
   ( <Component {...routeprops} />)
               :
       (<Redirect to="/"/>)
      }
    }
    />);    
}
