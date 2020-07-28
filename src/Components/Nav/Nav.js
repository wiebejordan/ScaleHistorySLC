import React, {Component, Profiler} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {getUser, clearUser} from '../../redux/authReducer';
import '../Nav/nav.css';
import axios from 'axios';

class Nav extends Component{
    constructor(props){
      super(props)

      this.state = {
        username: '',
        password: ''
      }
      
    }

  componentDidMount = () => {
    this.keepUser();
  }

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleLogin = () => {
    const {username, password} = this.state;

    axios.post('/auth/login', {username, password})
    .then(res => {
      this.props.getUser(res.data);
      alert(`Welcome ${this.props.user.username}!`);
    })
    .catch(err => console.log(err))
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
      alert('you have succesfully logged out')
      this.setState({username: '', password: ''});
      this.props.history.push('/');
    })
  }

  render(){
    return(
      <div className='nav'>
        
        <div className='nav-links'>
          <Link to='/'><nav>Home</nav></Link>

          <nav>Videos</nav>

          <Link to='/blog'><nav>Blog</nav></Link>
          

          <Link to='/Gajograd2021'><nav>GajoGrad Event</nav></Link>
          
          <nav>Order Dice App</nav>
        </div>
        
        {!this.props.user.username
        ?(
        <div className='nav-login'>
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
        
        or

        <Link to='/userregister'><button>Sign up!</button></Link>
        </div>)

        :(
        
        <div className='nav-user-info'>
        <p>Welcome,</p>
        <Link to={`/profile/${this.props.user.user_id}`}>
        <nav> {this.props.user.username}</nav>
        </Link>
        <button onClick={this.logout}>Logout</button>
        </div>)}
        
        
      </div>
    )
  }
}

const mapStateToProps = reduxState => reduxState;

export default withRouter(connect(mapStateToProps, {getUser, clearUser})(Nav));