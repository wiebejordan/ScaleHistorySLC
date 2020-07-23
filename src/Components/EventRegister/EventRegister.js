import React, {Component, Profiler} from 'react';

class EventRegister extends Component{
    constructor(props){
      super(props)

      this.state = {
        name: '',
        side: '',
        faction: '',
        payed: false,
        selectedOption: 'allies'
      }
    }

    handleOptionChange = changeEvent => {
      this.setState({
        selectedOption: changeEvent.target.value
      });
    };

    


  render(){
    return(
      <div>
        EventRegister

        Name: <input
        name='name'
        value={this.state.name}
        onChange={e => this.handleInput(e)}
        placeholder='name'
        />

        <form>
          <div className="radio">
            <label>
              <input type="radio" value="allies" checked={this.state.selectedOption === 'allies'}
              onChange={this.handleOptionChange} />
            Allies
            </label>
          </div>
    
          <div className="radio">
            <label>
              <input type="radio" value="axis" checked={this.state.selectedOption === 'axis'}
              onChange={this.handleOptionChange}/>
            Axis
            </label>
          </div>
        </form>

        Faction: <input
        name='faction'
        value={this.state.faction}
        onChange={e => this.handleInput(e)}
        placeholder='enter faction'
        />

        <button>Register for Gajograd 2021</button>
        
        

      </div>
    )
  }
}

export default EventRegister;