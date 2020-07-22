import React, {Component, Profiler} from 'react';
import {Link} from 'react-router-dom';

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
        <button>Login</button>
        <Link to='/userregister'><button>Register</button></Link>
        
      </div>
    )
  }
}

export default Main;