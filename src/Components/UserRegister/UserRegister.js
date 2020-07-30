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
      profile_img: 'https://i.stack.imgur.com/l60Hf.png',
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