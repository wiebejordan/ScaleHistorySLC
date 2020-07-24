import React, {Component, Profiler} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class Profile extends Component{

  deleteUser = () => {
    axios.delete(`/auth/delete/${this.props.user.user_id}`)
    .then(() => {
      this.props.history.push('/')
      alert('your account has been deleted');
    })
    .catch(err => console.log(err))
  }


  render(){
    return(
      <div>
        <h1>{this.props.user.username}</h1>

        <img src={this.props.user.profile_img} 
          style={{
            height: '100px',
            width: '100px',
        }}/>

        <button onClick={(e) => { if (window.confirm('Are you sure you wish to delete your account?')) this.deleteUser(e) } }>Delete Profile</button>
      </div>
    )
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Profile);

