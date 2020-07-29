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
        <img src='https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/82867472_3146249728737108_3513119034348404736_n.jpg?_nc_cat=104&_nc_sid=b9115d&_nc_ohc=jGh2DbsHcPsAX83kPPK&_nc_ht=scontent-den4-1.xx&oh=5ba2ad87e623344cb1415360cc0bbd56&oe=5F4486C5'/>

        <section>
        The great city of Gajograd, located in Eastern Europe, is a strategic objective for both the Allies and the Axis, as it is a great supply center. Each side throws massive amounts of men and machine into the fray for control of the vital city and the surrounding rural area. 
        <br/>
        Gajograd is a Bolt Action event with an Axis vs Allies format. Players will register before the event for either side, and then create a force consisting of 800 points. Individual scores will be tracked, but each player’s combined scores will be totaled and one team will claim victory! 
        <br/>
        There will be 3 games, followed by prizes for the winning team, best Axis and best Allied general, and more!
        <br/>
        <section>
        Read about last year's event <Link to='/Gajograd2020'>here</Link>.
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