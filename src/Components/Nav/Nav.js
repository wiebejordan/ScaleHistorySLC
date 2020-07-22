import React, {Component, Profiler} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {getUser, clearUser} from '../../redux/authReducer';
import axios from 'axios';

class Nav extends Component{

  componentDidMount = () => {
    this.keepUser();
  }

  keepUser = () => {
    axios.get('/auth/me')
    .then(res => {
      this.props.getUser(res.data[0])
    })
    .catch(err => console.log(err))
  }

  logout = () => {
    axios.post('/auth/logout')
    .then(() => {
      this.props.clearUser();
      this.props.history.push('/');
    })
  }

  render(){
    return(
      <div>
        <nav>Videos</nav>
        <nav>Blog</nav>
        <nav>GajoGrad Event</nav>
        <nav>Order Dice App</nav>

        Welcome, <nav>{this.props.user.username}</nav>

        <nav>Logout</nav>
      </div>
    )
  }
}

const mapStateToProps = reduxState => reduxState;

export default withRouter(connect(mapStateToProps, {getUser, clearUser})(Nav));