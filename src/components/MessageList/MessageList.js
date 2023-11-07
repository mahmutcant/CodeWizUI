import './MessageList.css';
function MessageList({ messages }) {
    return (
      <ul className="messageList">
        {messages.map((message, index) => (
          <li key={index}>
            <strong>{message.sender}:</strong> {message.text}
          </li>
        ))}
      </ul>
    );
  }

export default MessageList;