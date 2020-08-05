import React, {Component, Profiler} from 'react';
import Axios from 'axios';
import {connect} from 'react-redux';
import '../EventRegister/EventRegister.css';

class EventRegister extends Component{
    constructor(props){
      super(props)

      this.state = {
        name: '',
        faction: '',
        payed: false,
        selectedOption: 'allies'
      }
    }

    componentDidMount(){
      if(!this.props.user.username){
        this.props.history.push('/Gajograd2021')
        alert('please log in to register for event')
      }
      else if(this.props.user.side){
        this.props.history.push('/Gajograd2021')
        alert(`${this.props.user.username}, you are already registered for this event with the ${this.props.user.side}! 
        Head to the Command Room for briefing!`)
      }
    }

    handleOptionChange = changeEvent => {
      this.setState({
        selectedOption: changeEvent.target.value
      });
    };

    handleInput = (e) => {
      this.setState({[e.target.name]: e.target.value})
    }


    handleEventRegister = () => {
      const {player_id, name, side, faction, payed} = this.state;
      
      if(this.state.name === ''){
        alert('Please enter your name');
      }
      else if(this.state.faction === ''){
        alert('please enter your faction');
      }
      else{
        Axios.post('/api/playerregister', {player_id: this.props.user.user_id, name: this.state.name, side: this.state.selectedOption, faction: this.state.faction, payed: this.state.payed})
        .then(() => { alert('You are now registered for Gajograd 2021! Head to the Command Room to plan with your teammates!')
          
        })
        .catch(err => console.log(err));

        Axios.put(`/api/addside/${this.props.user.user_id}`, {side: this.state.selectedOption})
        .then(() => this.props.history.push(`/Gajograd2021`))
        .catch(err => console.log(err))

        // Axios.post('/');
        this.props.history.push('/Gajograd2021')

        this.handleRegisterEmail();
        }
      }

      handleRegisterEmail = () => {
        Axios.post(`/api/GG2021reg/${this.props.user.email}?side=${this.state.selectedOption}`)
        .then(res => {})
        .catch(err => console.log(err))
      }
    
      
    


  render(){
    return(
      <div className='event-reg-main'>
        <div className='event-reg-container'>
        <header>Gajograd 2021 Register</header>

        <div className='player-info'>
        
        <input 
        name='name'
        value={this.state.name}
        onChange={e => this.handleInput(e)}
        placeholder='first and last name'
        />

        <form>
          <div className="radio">
            <label>
              <input className="checkmark"
               type="radio" value="allies" checked={this.state.selectedOption === 'allies'}
              onChange={this.handleOptionChange} />
              
            Allies
            </label>
          </div>
    
          <div className="radio">
            <label>
              <input className="checkmark" type="radio" value="axis" checked={this.state.selectedOption === 'axis'}
              onChange={this.handleOptionChange}/>
              
            Axis
            </label>
          </div>
        </form>

  

        <input
        name='faction'
        value={this.state.faction}
        onChange={e => this.handleInput(e)}
        placeholder='enter faction'
        />

        <button onClick={this.handleEventRegister}>Register for Gajograd 2021</button>
        
        </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(EventRegister);