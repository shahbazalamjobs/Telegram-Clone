

import React from 'react';
import '../styles/ChatList.css'; 

const ChatList = ({ chats, onChatSelect }) => {
  return (
    <div className="chat-list-section">
      <ul className="chat-list">
        {chats.map(chat => (
          <li key={chat.id} onClick={() => onChatSelect(chat.id)} className="chat-item">
            <div className="profile-icon">
              {chat.creator.name ? chat.creator.name.charAt(0).toUpperCase() : 'A'}
            </div>
            <div className="chat-info">
              <div className="chat-header">
                <div className="chat-name">{chat.creator.name || chat.creator.email}</div>
                <div className="last-message-date">{new Date(chat.updated_at).toLocaleDateString()}</div>
              </div>
              <div className="last-message">
                {chat.last_message ? chat.last_message.substring(0, 32) + (chat.last_message.length > 32 ? '...' : '') : 'No messages yet'}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
