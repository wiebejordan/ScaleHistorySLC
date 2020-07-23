import React, {Component, Profiler} from 'react';
import {connect} from 'react-redux';

class Axis extends Component{

  componentDidMount(){
    if(!this.props.user.side){
      this.props.history.push('/Gajograd2021')
      alert('please register for event to enter Command Room')
    }
  }


  render(){
    return(
      <div>
        Axis
      </div>
    )
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Axis);