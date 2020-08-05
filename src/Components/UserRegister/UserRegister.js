import React, {Component, Profiler} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from '../../redux/authReducer';
import '../UserRegister/UserRegister.css';
import ImageUploader from 'react-images-upload';

class UserRegister extends Component{
  constructor(props){
    super(props)

    this.state={
      username: '',
      password: '',
      email: '',
      profile_img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4759b976-8db7-4848-ae2d-29c46ff49268/d36o3of-f8217607-3d21-49ea-9c0c-a4c21fb59a16.jpg/v1/fill/w_700,h_525,q_75,strp/ww2_us_soldier_with_thompson_by_jesusfood_d36o3of-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01MjUiLCJwYXRoIjoiXC9mXC80NzU5Yjk3Ni04ZGI3LTQ4NDgtYWUyZC0yOWM0NmZmNDkyNjhcL2QzNm8zb2YtZjgyMTc2MDctM2QyMS00OWVhLTljMGMtYTRjMjFmYjU5YTE2LmpwZyIsIndpZHRoIjoiPD03MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.mVjH-EpmNA8zf7d9YP8oR_mBKeDtW1c9qTXkng8uI84',
      isAdmin: false
    }
  }

   handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleRegister = () => {
    const {username, password, email, profile_img, isAdmin} = this.state;
    if(password){
      axios.post('/auth/register', {username, password, profile_img: profile_img, email, isAdmin: this.state.isAdmin})
      .then(res => {
        this.props.getUser(res.data);
        this.props.history.push('/');
        this.handleWelcomeEmail();
        alert(`Welcome to ScaleHistorySLC, ${this.state.username}!`)
      })
      .catch(err => console.log(err))
    } else {
      alert('enter password');
    }
  }

  handleWelcomeEmail = () => {
    axios.post(`/api/email/${this.state.email}`)
    .then(res => {})
    .catch(err => console.log(err))
  }

  onDrop = (picture) => {
    this.setState({profile_img: picture});
  }

  render(){
     

    return(
      <div className='UR-main'>

        <div className='UR-container'>
        <h1>USER REGISTER</h1>
        <img src={this.state.profile_img}
        />

        Username: <input
        name='username'
        value={this.state.username}
        onChange={e => this.handleInput(e)}
        placeholder='enter username'
        />

        Password: <input
        name='password'
        value={this.state.password}
        onChange={e => this.handleInput(e)}
        placeholder='enter password'
        />

        Email: <input
        name='email'
        value={this.state.email}
        onChange={e => this.handleInput(e)}
        placeholder='enter email'
        />

        <ImageUploader
          withIcon={true}
          buttonText='Choose profile image'
          onChange={this.onDrop}
          imgExtension={['.jpg', '.gif', '.png', '.gif']}
          maxFileSize={5242880}
          singleImage={true}
            />

        <button onClick={this.handleRegister}>Register!</button>
        </div>

      </div>
    )
  }
}

export default connect(null, {getUser})(UserRegister);