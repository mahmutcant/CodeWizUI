import React, { useState } from 'react';
import MessageList from '../MessageList/MessageList';
import MessageInput from '../MessageInput/MessageInput';
import { sendMessage } from '../../services/chat-service';
function Chat() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const activeChat = window.location.pathname.split("/")[2];
  const addMessage = (text, sender) => {
    const newMessage = {
      text: text,
      sender: sender,
      activeChat : activeChat
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
        <MessageList messages={messages}/>
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