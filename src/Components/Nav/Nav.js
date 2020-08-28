import React, {Component, Profiler} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {getUser, clearUser} from '../../redux/authReducer';
import '../Nav/nav.css';
import axios from 'axios';
import hamburger from '../Nav/hamburger.png';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

class Nav extends Component{
    constructor(props){
      super(props)

      this.state = {
        username: '',
        password: '',
        dropdownView: false,
        dropdownLogin: false,
        loading: true
      }
      
    }

  

  componentDidMount = () => {
    this.keepUser();
    
  }


  toggleScroll = () => {
    if(this.state.dropdownView === false){
      document.body.style.overflow = "hidden"
    }
    else if(this.state.dropdownView === true){
      document.body.style.overflow = "auto"
    }
  };

  toggleScroll2 = () => {
    if(this.state.dropdownLogin === false){
      document.body.style.overflow = "hidden"
    }
    else if(this.state.dropdownLogin === true){
      document.body.style.overflow = "auto"
    }
  };

  

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleLogin = () => {
    const {username, password} = this.state;
    if(this.state.username === ''){
      alert('please enter your username')
    }
    else if(this.state.password === ''){
      alert('please enter your password')
    }
    else{
    axios.post('/auth/login', {username, password})
    .then(res => {
      this.props.getUser(res.data);
      this.setState({loading: false})
      alert(`Welcome ${this.props.user.username}!`);
    })
    .catch(() => alert('username and password do not match'))
    }
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

  toggleDropdown = () => {
    if(this.state.dropdownLogin !== true){
    this.setState({dropdownView: !this.state.dropdownView});
    }
    else if(this.state.dropdownLogin === true){
      this.setState({dropdownLogin: !this.state.dropdownLogin});
      this.setState({dropdownView: !this.state.dropdownView});
    }
    this.toggleScroll()
  }

  toggleLoginDropdown = () => {
    if(this.state.dropdownView !== true){
    this.setState({dropdownLogin: !this.state.dropdownLogin});
    }
    else if(this.state.dropdownView === true){
      this.setState({dropdownView: !this.state.dropdownView});
      this.setState({dropdownLogin: !this.state.dropdownLogin});
    }
    this.toggleScroll2()
  }

  handleDropdownLogin = () => {
    const {username, password} = this.state;

    axios.post('/auth/login', {username, password})
    .then(res => {
      this.props.getUser(res.data);
      this.toggleLoginDropdown();
      alert(`Welcome ${this.props.user.username}!`);

    })
    .catch(err => console.log(err))
  }

  render(){
    return(
      <div>
      <div className='nav'>
        <div className='nav-title'>
        <h1>SCALE HISTORY SLC</h1>
        <p>'Putting the "able" back in tabletop standard!'</p>
        </div>

        <div className='dropdown' onClick={this.toggleDropdown}>
          <nav>SHSLC</nav>
          <img src={hamburger}/>
        </div>

        {/* Drop Down Menu **********************************************/}
        {this.state.dropdownView
        ?(
          <nav className='mobile-menu'>
            <span className='mobile-options' onClick={this.toggleDropdown}>
          <Link className='Links' to='/'><nav>Home</nav></Link>

          <a className='Links' href='https://www.youtube.com/channel/UCyI414P63CYsD1c5UuXGZBw?view_as=subscriber'><nav>Videos</nav></a>

          <Link className='Links' to='/blog'><nav>Blog</nav></Link>
          

          <Link className='Links' to='/Gajograd2021'><nav>Gajograd Event</nav></Link>
          
          <nav>Order Dice App</nav>
          </span>
          </nav>
        )
        
        :null}

        {/* ***************************************************** */}
        
        {/* Displays login inputs or Username if logged in ******* */}
        
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
            type='password'
            name='password'
            value={this.state.password}
            onChange={e => this.handleInput(e)}
            placeholder='enter password'
            />

            <button onClick={this.handleLogin}>Login</button>
        
            or

            <Link  to='/userregister'><button>Sign up!</button></Link>

            </div>)

        :(
        
          <div className='nav-user-info'>
            <p>Welcome,</p>
            <Link className='nav-username' to={`/profile/${this.props.user.user_id}`}>
            <nav> {this.props.user.username}</nav>
            </Link>
            <button onClick={this.logout}>Logout</button>
            </div>)}
        {/* ************************************************************* */}

        {/* Displays login buttons for mobile devices ******************  */}
        {!this.props.user.username
        ?(
          
          <div className='responsive-login'>
            <button onClick={this.toggleLoginDropdown}>Login</button>
        
            or

            <Link to='/userregister'><button>Sign up!</button></Link>
            </div>)
        :null}
        {/* ************************************************************** */}

        {/* Displays mobile login dropdown *********************************/}
        {this.state.dropdownLogin
        ?(
          <div className='dropdown-login'>
            Username: <input
            name='username'
            value={this.state.username}
            onChange={e => this.handleInput(e)}
            placeholder='enter username'
          />

            Password: <input
            type='password'
            name='password'
            value={this.state.password}
            onChange={e => this.handleInput(e)}
            placeholder='enter password'
          />

            <button onClick={this.handleDropdownLogin}>Login</button>
        </div>)
        :null}

        
      </div>
      {/* ******************************************************************* */}

      {/* desktop menu display */}
      <div className='nav-links'>
          <Link className='Links' to='/'><nav>Home</nav></Link>

          <a className='Links' href='https://www.youtube.com/channel/UCyI414P63CYsD1c5UuXGZBw?view_as=subscriber'><nav>Videos</nav></a>

          <Link className='Links' to='/blog'><nav>Blog</nav></Link>
          

          <Link className='Links' to='/Gajograd2021'><nav>Gajograd Event</nav></Link>
          
          <nav>Order Dice App</nav>
        </div>
      </div>
    )
  }
}

const mapStateToProps = reduxState => reduxState;

export default withRouter(connect(mapStateToProps, {getUser, clearUser})(Nav));