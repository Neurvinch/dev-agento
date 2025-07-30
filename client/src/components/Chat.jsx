import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    try {
      const res = await axios.post('http://localhost:5000/api/ask', { message: input });
      const botReply = { role: 'agent', content: res.data.reply };
      setMessages(prev => [...prev, botReply]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div style={{ height: 300, overflowY: 'auto', border: '1px solid #ccc', padding: 10 }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ marginBottom: 8 }}>
            <strong>{msg.role === 'user' ? 'You' : 'DevAgent'}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 10 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask something..."
          style={{ width: '80%', padding: 8 }}
        />
        <button onClick={handleSend} style={{ padding: 8 }}>Send</button>
      </div>
    </div>
  );
};
 
export default Chat;
