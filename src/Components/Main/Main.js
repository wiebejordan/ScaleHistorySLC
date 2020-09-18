import React, {Component, Profiler} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUser} from '../../redux/authReducer';
import axios from 'axios';
import '../Main/Main.css'

class Main extends Component{
  

    


  render(){
    return(
      <div className='main'>
        <div className='main-container'>
        <h1>The Latest:</h1>
        <div>
        <iframe  src="https://www.youtube.com/embed/lZwVMogfAos" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div className='blogpost'>
        <h2>Big Trouble in Giant China - 8/10/20</h2>
        <Link to='/blogpost/4'>
        <img src='https://i.imgur.com/sAa0nVG.jpg'/>
        </Link>
        </div>

        <h3>Japanese Army Overview </h3>
        <iframe className='bottom-video' width="560" height="315" src="https://www.youtube.com/embed/rf-1I8K0TSE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
        </div>
      </div>
    )
  }
}

export default connect(null, {getUser})(Main);