import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Main from './Components/Main/Main';
import UserRegister from './Components/UserRegister/UserRegister';
import EventRegister from './Components/EventRegister/EventRegister';
import Gajograd2021 from './Components/Gajograd2021/Gajograd2021';
import Profile from './Components/Profile/Profile';
import Allies from './Components/Allies/Allies';
import Axis from './Components/Axis/Axis';

export default (
  <Switch>
    <Route exact path='/' component={Main}/>
    <Route path='/Gajograd2021' component={Gajograd2021}/>
    <Route path='/profile/:userid' component={Profile}/>
    <Route path='/userregister' component={UserRegister}/>
    <Route path='/eventregister' component={EventRegister}/>
  </Switch>
);