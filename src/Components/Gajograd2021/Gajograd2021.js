import React, {Component, Profiler} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import '../Gajograd2021/Gajograd2021.css';

class Gajograd2021 extends Component{

  handleCommandRoom = () => {
    if(this.props.user.side === 'allies'){
      this.props.history.push('/commandroom/allies')
    }
    else if(this.props.user.side === 'axis'){
      this.props.history.push('/commandroom/axis')
    }
    else{
      alert('please register for event to access command room')
    }
  }

  render(){
    return(
      <div className='GGmain'>
        <div className='container'>
        <header>GAJOGRAD 2021</header>
        <h3>January 18th, 2021</h3>
        <img src='https://i.imgur.com/A3BYOoI.jpg'/>

        <section>
        The great city of Gajograd, located in Eastern Europe, is a strategic objective for both the Allies and the Axis, as it is a great supply center. Each side throws massive amounts of men and machine into the fray for control of the vital city and the surrounding rural area. 
        <br/>
        Gajograd is a Bolt Action event with an Axis vs Allies format. Players will register before the event for either side, and then create a force consisting of 800 points. Individual scores will be tracked, but each player’s combined scores will be totaled and one team will claim victory! 
        <br/>
        There will be 3 games, followed by prizes for the winning team, best Axis and best Allied general, and more!
        <br/>
        <section>
        Read about last year's event <Link className='gg2020-link' to='/Gajograd2020'>here</Link>.
        </section>
         
        </section>

        
        <div className='button-box'>
        <Link to='/eventregister'>
        <button>Register For Event</button>
        </Link>
        
        {this.props.user.username
        ?(
        
        <button onClick={this.handleCommandRoom}>Go to Command Room</button>
        )
        :null}
        </div>
        </div>
      </div>
    
      
    )
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Gajograd2021);