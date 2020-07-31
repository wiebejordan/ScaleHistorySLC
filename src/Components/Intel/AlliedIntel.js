import React, {useState, useEffect} from 'react';

const AlliedIntel = () => {
  const [date, setDate] = useState( );
  const [messages, setMessage] = useState();
}

return(
  <div className='Intel-container'>
    {messages.map((message, i) => {
      return(
        <div key={i}>
          {message.body}
        </div>
      )
    }
    )}
  </div>
)

export default AlliedIntel