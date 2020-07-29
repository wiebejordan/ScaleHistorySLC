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
        <iframe  src="https://www.youtube.com/embed/rf-1I8K0TSE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div className='blogpost'>
        <h2>Current Project - OSS Deer Team - 7/21/2020</h2>
        <Link to='/blogpost/2'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Ho_Chi_Minh_%28third_from_left_standing%29_and_the_OSS_in_1945.jpg'/>
        </Link>
        </div>
        </div>
      </div>
    )
  }
}

export default connect(null, {getUser})(Main);