import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import Home from './components/Home/Home'
  import Profile from './components/Profile/Profile'
  import NavHome from './components/Navbar/Navbar'
  import Asesorias from './components/Asesorias/Asesorias'
function AppRouter(){
    return (
<Router>
     <NavHome/>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/asesoria" component={Asesorias} />
    </Switch>
</Router>
    )
}
export default AppRouter;