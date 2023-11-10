import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import './MessageList.css';
import { solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useEffect, useState } from 'react';
import { getMessage } from '../../services/chat-service';
import { useSelector } from 'react-redux';
function MessageList() {
  
  const activeChat = window.location.pathname.split("/")[2];
  const [messageList, setMessageList] = useState([])
  const user = useSelector(state => state.user)
  useEffect(() => {
    activeChat ? getMessage(activeChat).then(data => {setMessageList(data)} ) : setMessageList([])
  }, [activeChat])
  function formatNewLines(text) {
    return text.replace(/\\n/g, '\n');
  }
  const textSplitter = (text) => {
    const beginIndex = text.split("```")
    return beginIndex[1]
  }
  return (
    messageList.length === 0 ? <div className="message-container">
    <h1 className="centered-text">Code WIZ</h1>
    <div className='centered-long-text'>Optimize etmek veya refactor etmek istediğiniz bir kod parçası var mı?</div>
  </div> : <ul className="messageList">
    {messageList && messageList.map((message, index) => (
      <li key={index}>
        <strong>{user.userName}:</strong> {message.userMessage}
        <SyntaxHighlighter language="javascript" style={solarizedDark}>
          {textSplitter(formatNewLines(message.messageContent))}
        </SyntaxHighlighter>
      </li>
    ))}
    </ul>
    );
  }

export default MessageList;
/*
<ul className="messageList">
      
    
      {messages.map((message, index) => (
        <li key={index}>
          <strong>{message.sender}:</strong> {message.text}
          <SyntaxHighlighter language="java" style={solarizedDark}>
            
          </SyntaxHighlighter>
        </li>
      ))}
      </ul>

      const myCode = `
  aracKonumdaMi.setOnClickListener(new View.OnClickListener() {\n    
    @Override\n    public void onClick(View v) {\n        if (aracKonumdaMi.isChecked()) {\n            txtAracinSehri.setVisibility(View.INVISIBLE);\n            aracEkleSehir.setVisibility(View.INVISIBLE);\n        } else {\n
      txtAracinSehri.setVisibility(View.VISIBLE);\n            aracEkleSehir.setVisibility(View.VISIBLE);\n        }\n    }\n});
  `;
*/