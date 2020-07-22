import React, {Component, Profiler} from 'react';
import axios from 'axios';

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
      axios.post('/auth/register', {username, password, profile_img: profile_img, email, isAdmin})
      .then(res => {
        this.props.getUser(res.data);
        this.props.history.push('/');
      })
      .catch(err => console.log(err))
    } else {
      alert('enter password');
    }
  }


  render(){
     

    return(
      <div>

        <img src={this.state.profile_img}
        style={{
          height: '100px',
          width: '100px',
        }}/>

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

        Upload Profile Photo:<input 
         name='profile_img'
         type="file" 
         accept="image/*" 
         multiple = "false"
         onChange={e => this.handleInput(e)}
         />

      </div>
    )
  }
}

export default UserRegister;