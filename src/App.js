import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import routes from './routes';
import Nav from './Components/Nav/Nav';

class App extends Component{
  
  render(){
  return (
    <div>
      <Nav/>
      {routes}
    </div>
  );
  }
}

export default App;
