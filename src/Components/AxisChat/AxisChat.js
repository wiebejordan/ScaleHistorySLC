import React, {useState, useEffect, useSelector} from 'react';
import io from 'socket.io-client'
import '../AlliesChat/AlliesChat.css'
import {connect} from 'react-redux';



const socket = io.connect('http://localhost:5050');

const mapStateToProps = reduxState => reduxState;

const  Axischat = (props) => {

  
  const [state, setState] = useState({message: '', name: props.user.username});
  const [chat, setMessage] = useState([]);
  const prevMsg = []

  useEffect(() => {
    socket.on('axis-message', ({name, message}) => {
      setMessage([...chat, {name, message}])
    })
    
    socket.on('global-message', ({name, message}) => {
      setMessage([...chat, {name, message}])
    } )
    
    // socket.addEventListener('allied-prev-messages', function(alliedMessages){
    //   for(let i = 0; i < alliedMessages.length; i++){
    //   prevMsg.prev(alliedMessages[i].message)
      
    //   }
    // })

  })

  const onTextChange = (e) => {
    setState({...state, [e.target.name]: e.target.value})
  }

  const onMessageSubmit = (e) => {
    e.preventDefault()
    const {name, message} = state
    socket.emit('axis-message', {name, message});
    setState({message: '', name });
  }

  

  
  const renderChat = () => {
    return chat.map(({name, message}, i) => (
      <div className='my-row' key={i}>
        <div>
          <h3>
            {name}: <span className='my-message'>{message}</span>
          </h3> 
       </div> 
    </div>
    ))
    
  }
  

  

  return (
    <div className='chat-container'>
      <h1>Communications</h1>
      <div className='chat-window'>
        {renderChat()}
      </div>
      <div >
      <form className='chat-inputs' onSubmit={onMessageSubmit}>
        {/* <div className='name-field'>
          <textarea
          className='chat-name'
          name='name'
          onChange={e => onTextChange(e)}
          value={state.name}
          placeholder='Name'
          />
        </div> */}
        <div>
          <textarea
          className='chat-message'
          name='message'
          onChange={e => onTextChange(e)}
          value={state.message}
          placeholder='Message'
          />
        </div>
        <button>Send</button>
      </form>
      </div>
    </div>
  );

};



export default connect(mapStateToProps)(Axischat);

