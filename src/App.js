import React, {Component} from 'react';
import logo from './logo.svg';
import {Link, withRouter} from 'react-router-dom';
import './App.css';
import routes from './routes';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';


class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      userReady: false 
    }
  }
  
  componentDidMount = () => {
    
  }

  render(){
  return (
    <div>
      {this.props.location.pathname !== '/userregister' 
      ?(
      <Nav/>
      )
      :null}
      {routes}
      <Footer/>
    </div>
  );
  }
}

export default withRouter(App);
