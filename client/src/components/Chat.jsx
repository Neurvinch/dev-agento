  import React, { useState } from 'react'
  
  const Chat = () => {

    const [input , setInput] = useState('');
    const [messages, setMessages] = useState([]);
      
     const handleSend = async () => {
         if (!input.trim()) return; // Prevent sending empty messages

         
     }
  

    return (
      <div>Chat</div>
    )
  }
  
  export default Chat