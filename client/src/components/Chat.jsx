  import React, { useState } from 'react'

  import axios from 'axios';

  
  const Chat = () => {

    const [input , setInput] = useState('');
    const [messages, setMessages] = useState([]);
      
     const handleSend = async () => {
         if (!input.trim()) return; // Prevent sending empty messages
   

         const userMessage = { role: 'user', content : input};
        
         setMessages( prev => [...prev,userMessage]);

         setInput('');


           try {

        const res =  await axios.post('http;//localhost:5000/api/ask', {
          message : input
        });

        const botReply = {role: 'agent' , content : res.data.reply};
         
        setMessages(prev => [...prev, botReply] );
     } catch (error) {
         console.error(error);
     }
  
     }  

   

    return (
      <div>
         {messages.map(() => (
          <>
          </>
         )) }

      </div>
    )
  }
  
  export default Chat