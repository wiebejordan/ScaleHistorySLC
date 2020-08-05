import React, {Component} from 'react';
import {connect} from 'react-redux';
import {clearUser} from '../../redux/authReducer';
import axios from 'axios';
import '../Profile/Profile.css';

class Profile extends Component{

  deleteUser = () => {
    axios.delete(`/auth/delete/${this.props.user.user_id}`)
    .then(() => {
      this.props.history.push('/')
      this.logout()
      alert('your account has been deleted');
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
      <div className='profile-main'>
        <div className='profile-container'>

        <img src={this.props.user.profile_img} 
          style={{
            height: '100px',
            width: '100px',
          }}/>
          <h1>{this.props.user.username}</h1>

          <div className='profile-events'>
          <h3>Registered Events:</h3>

          {this.props.user.side
          ? (<p>You are registered for GajoGrad 2021 on the side of the {this.props.user.side}!</p>)
          :(<p>You have not registered for any events.</p>)}
          </div>

        <button onClick={(e) => { if (window.confirm('Are you sure you wish to delete your account?')) this.deleteUser(e) } }>Delete Profile</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {clearUser})(Profile);

