import React, {useState, useEffect, useRef} from 'react';
import io from 'socket.io-client'
import '../AlliesChat/AlliesChat.css'
import {connect} from 'react-redux';

const  AlliesChat = () => {
  const [yourID, setYourID] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect('/');

    socketRef.current.on('connectToRoom', data => {
      
    })

    socketRef.current.on("your id", id => {
      setYourID(id);
    })

    socketRef.current.on("message", (message) => {
      console.log("here");
      receivedMessage(message);
    })
  }, []);

  function receivedMessage(message) {
    setMessages(oldMsgs => [...oldMsgs, message]);
  }

  function sendMessage(e) {
    e.preventDefault();
    const messageObject = {
      body: message,
      id: yourID,
    };
    setMessage("");
    socketRef.current.emit("send message", messageObject);
  }

  function handleChange(e) {
    setMessage(e.target.value);
  }

  return (
    <div>
      <div className='chat-container'>
          <div className ='chat-window'>
          {messages.map((message, index) => {
          if (message.id === yourID) {
            return (
              <div className='my-row' key={index}>
                <div className='my-message'>
                  {message.body} 
                </div>
              </div>
            )
          }
          return (
            <div className='partner-row' key={index}>
              <div className='partner-message'>
                {message.body}
              </div>
            </div>
          )
        })}
          </div>


      </div>
      <input className='message-input' value={message} onChange={handleChange} placeholder="say something"/>
      <button className='send-button' onClick={sendMessage}>Send</button>
    </div>
  );

};

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(AlliesChat);

