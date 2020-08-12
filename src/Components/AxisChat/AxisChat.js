import React, {useState, useEffect, useRef} from 'react';
import io from 'socket.io-client'
import '../AlliesChat/Chat.css'
import {connect} from 'react-redux';
import axios from 'axios';




const socket = io();

const mapStateToProps = reduxState => reduxState;




const  AxisChat = (props) => {

  
  const [state, setState] = useState({message: '', name: props.user.username});
  const [chat, setChat] = useState([]);

  
  
  useEffect(() => {
    getMessages()
    
  }, [])

  
  useEffect(() => {
    
    scrollToMyRef()

    socket.on('axis-message', ({name, message}) => {
      setChat([...chat, {name, message}])
    })

    socket.on('global-message', ({name, message}) => {
      setChat([...chat, {name, message}])
    } )

  })

  const onTextChange = (e) => {
    setState({...state, [e.target.name]: e.target.value})
  }

  const onMessageSubmit = (e) => {
    e.preventDefault()

    const {name, message} = state
    if(props.user.isadmin === true){
      socket.emit('global-message', {name: `ADMIN`, message});
      setState({message: '', name });
      postMessages();
     
      
    }
    else {
      socket.emit('axis-message', {name, message});
      setState({message: '', name });
      postMessages();
      
      
    }
  }

  const getMessages = () => {
      axios.get('/api/axismessages')

      .then(res => setChat(res.data))
      .catch(err => console.log(err));
  }

  const postMessages = () => {
    axios.post('/api/postaxismessage', {name: state.name, message: state.message})

      .then(() => {

      })
      .catch(err => console.log(err));
  }

  const messagesEndRef = useRef(null) 

  const scrollToMyRef = () => {
    const scroll =
      messagesEndRef.current.scrollHeight -
      messagesEndRef.current.clientHeight;
      messagesEndRef.current.scrollTo(0, scroll);
  };
  
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
      
      <div ref={messagesEndRef} className='chat-window'>
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



export default connect(mapStateToProps)(AxisChat);

