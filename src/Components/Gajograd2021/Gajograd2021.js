import React, {Component, Profiler} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

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
      <div>
        <header>GAJOGRAD 2021</header>

        <img src='https://launch.battlefront.co.nz/wp-content/uploads/Stalingrad-artwork.jpeg'/>

        <section>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</section>

        <Link to='/eventregister'>
        <button>Register For Event</button>
        </Link>
        
        {this.props.user.username
        ?(
        
        <button onClick={this.handleCommandRoom}>Go to Command Room</button>
        )
        :null}
      </div>
    
      
    )
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Gajograd2021);