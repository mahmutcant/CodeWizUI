import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import './MessageList.css';
import { solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useEffect, useState } from 'react';
import { getMessage, sendMessage } from '../../services/chat-service';
import { useSelector } from 'react-redux';
function MessageList({messages}) {
  const activeChat = window.location.pathname.split("/")[2];
  const [messageList, setMessageList] = useState([])
  const user = useSelector(state => state.user)
  useEffect(() => {
    activeChat ? getMessage(activeChat).then(data => {setMessageList(data)} ) : setMessageList([])
  }, [activeChat])
  useEffect(() => {
    if(messages.length > 0) {
      const inMessage = messages.filter(item => item.activeChat === activeChat)
      const textList = messageList.map(item => item.messageContent);
      const lastMessage = inMessage[inMessage.length - 1].text
      sendMessage(lastMessage,textList,activeChat)
    }
  }, [messages])
  function formatNewLines(text) {
    return text.replace(/\\n/g, '\n');
  }
  const textSplitter = (text) => {
    const beginIndex = text.split("```")
    const languageWithDot = text.split("written in ")[1]
    const language = languageWithDot.split(".")[0]
    return  {code : beginIndex[1],language : language}
  }
  return (
    messageList.length === 0 && messages.length === 0 ? <div className="message-container">
    <h1 className="centered-text">Code WIZ</h1>
    <div className='centered-long-text'>Optimize etmek veya refactor etmek istediğiniz bir kod parçası var mı?</div>
  </div> : <ul className="messageList">
    {messageList && messageList.map((message, index) => (
      <li key={index}>
        <strong>{user.userName}:</strong> {message.userMessage}
        <SyntaxHighlighter language={textSplitter(formatNewLines(message.messageContent)).language.toLowerCase()} style={solarizedDark}>
          {textSplitter(formatNewLines(message.messageContent)).code}
        </SyntaxHighlighter>
      </li>
    ))}
    {messages.length !== 0 && messages.map((message, index) => (
      message.activeChat === activeChat ? <li key={index}>
        <strong>{message.sender}:</strong> {message.text}
      </li> : ""
    ))}
    </ul>
    );
  }

export default MessageList;