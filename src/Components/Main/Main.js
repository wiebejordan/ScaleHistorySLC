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
        <img src='https://media.cdn.adultswim.com/uploads/20200303/thumbnails/2_20331154179-decker_220.jpg'/>
        
      </div>
    )
  }
}

export default connect(null, {getUser})(Main);