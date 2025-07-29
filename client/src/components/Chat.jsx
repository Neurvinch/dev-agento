  import React, { useState } from 'react'
  
  const Chat = () => {

    const [input , setInput] = useState('');
    const [messages, setMessages] = useState([]);
      
     const handleSend = async () => {
         if (!input.trim()) return; // Prevent sending empty messages
   

         const userMessage = { role: 'user', content : input};
        
         setMessages( prev => [...prev,userMessage]);

         setInput('');


           try {

        const res =  awai
        
     } catch (error) {
        
     }
  
     }  

   

    return (
      <div>Chat</div>
    )
  }
  
  export default Chat