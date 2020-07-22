import React, {Component, Profiler} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUser} from '../../redux/authReducer';
import axios from 'axios';

class Main extends Component{
  constructor(props){
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }


  handleLogin = () => {
    const {username, password} = this.state;

    axios.post('/auth/login', {username, password})
    .then(res => {
      this.props.getUser(res.data);
      this.props.history.push('/');
    })
    .catch(err => console.log(err))
  }


  render(){
    return(
      <div>
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

        <button onClick={this.handleLogin}>Login</button>

        <Link to='/userregister'><button>Register</button></Link>
        
      </div>
    )
  }
}

export default connect(null, {getUser})(Main);