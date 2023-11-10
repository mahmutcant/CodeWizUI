import React, { useState } from 'react';
import MessageList from '../MessageList/MessageList';
import MessageInput from '../MessageInput/MessageInput';
function Chat() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  const addMessage = (text, sender) => {
    const newMessage = {
      text: text,
      sender: sender,
    };
    setMessages([...messages, newMessage]);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    addMessage(text, 'Kullanıcı');
    setText('');
  };
  

  return (
    <div className='App'>
      <div className='content' style={{"marginBottom": "100px"}}>
        <MessageList/>
        <MessageInput
          text={text}
          handleTextChange={handleTextChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default Chat;