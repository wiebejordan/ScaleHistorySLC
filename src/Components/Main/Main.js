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
        <h2>Big Trouble in Giant China - 8/10/20</h2>
        <Link to='/blogpost/4'>
        <img src='https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/117534524_3664439590251450_291436893493482400_n.jpg?_nc_cat=106&_nc_sid=b9115d&_nc_ohc=II9TyZOTmpUAX_q5Hlx&_nc_ht=scontent-den4-1.xx&oh=3befd5bd014e121e452cb8b15f955c4b&oe=5F5A9CB9'/>
        </Link>
        </div>

        <h1>Metal Miniatures</h1>
        <iframe className='bottom-video' width="560" height="315" src="https://www.youtube.com/embed/lZwVMogfAos" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    )
  }
}

export default connect(null, {getUser})(Main);