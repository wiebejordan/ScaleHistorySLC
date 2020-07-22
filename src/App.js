import React, {Component} from 'react';
import logo from './logo.svg';
import {Link, withRouter} from 'react-router-dom';
import './App.css';
import routes from './routes';
import Nav from './Components/Nav/Nav';

class App extends Component{
  
  render(){
  return (
    <div>
      {this.props.location.pathname !== '/userregister' 
      ?(
      <Nav/>
      )
      :null}
      {routes}
    </div>
  );
  }
}

export default withRouter(App);
