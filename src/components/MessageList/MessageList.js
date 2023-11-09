import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import './MessageList.css';
import { solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function MessageList({ messages }) {
  const myCode = `
  aracKonumdaMi.setOnClickListener(new View.OnClickListener() {\n    
    @Override\n    public void onClick(View v) {\n        if (aracKonumdaMi.isChecked()) {\n            txtAracinSehri.setVisibility(View.INVISIBLE);\n            aracEkleSehir.setVisibility(View.INVISIBLE);\n        } else {\n
      txtAracinSehri.setVisibility(View.VISIBLE);\n            aracEkleSehir.setVisibility(View.VISIBLE);\n        }\n    }\n});
  `;
    return (
      <ul className="messageList">
        {messages.map((message, index) => (
          <li key={index}>
            <strong>{message.sender}:</strong> {message.text}
            <SyntaxHighlighter language="java" style={solarizedDark}>
              {myCode}
            </SyntaxHighlighter>
          </li>
        ))}
        
      </ul>
      
    );
  }

export default MessageList;