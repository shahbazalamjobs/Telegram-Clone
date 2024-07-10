// ChatWindow.jsx
import React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../styles/ChatWindow.css'; // Import your CSS file

const ChatWindow = ({ messages, onBack }) => {
  return (
    <div className="chat-window">
      <div className="chat-header">
        <IconButton className="back-button" onClick={onBack}>
          <ArrowBackIcon />
        </IconButton>
      </div>

      <div className="messages">
        {messages && messages.length > 0 ? (
          messages.map(message => (
            <div key={message.id} className="message">
              <span className="message-sender">{message.sender.name || message.sender.email}</span>:
              <span className="message-content">{message.message}</span>
            </div>
          ))
        ) : (
          <div className="no-messages">No messages yet</div>
        )}
      </div>

      <div className="message-input">
        <input type="text" placeholder="Type a message..." />
        <button type="submit">Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
