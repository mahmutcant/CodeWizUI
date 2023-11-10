import './MessageInput.css';
function MessageInput({ text, handleTextChange, handleSubmit }) {
    return (
      <div className="chat-input">
        <textarea id="messageInput"
          type="text"
          placeholder=" Kodunuzu buraya girin"
          value={text} onChange={handleTextChange}></textarea>
        <button id='sendMessage' 
        style={{"backgroundColor" : text.length === 0 ? "#6B6C7B" : "#308efe"}}
        disabled={text.length === 0} 
        onClick={handleSubmit}>
          <i className='bx bxs-send bx-md'></i>
          </button>
      </div>
    );
  }
export default MessageInput;