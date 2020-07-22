import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import routes from './routes';

class App extends Component{
  
  render(){
  return (
    <div>
      {routes}
    </div>
  );
  }
}

export default App;
