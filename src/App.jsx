// App.jsx
import React, { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';
import ChatList from './components/ChatList';
import ChatWindow from './components/ChatWindow';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import { DarkModeContext } from './context/DarkModeContext';
import './styles/App.css';

const App = () => {
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [isTabletView, setIsTabletView] = useState(window.innerWidth <= 768);
  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const { isDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const handleResize = () => setIsTabletView(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await axios.get('https://devapi.beyondchats.com/api/get_all_chats?page=1');
        const chatsWithMessages = await Promise.all(response.data.data.data.map(async chat => {
          const messagesResponse = await axios.get(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chat.id}`);
          const messages = messagesResponse.data.data;
          const lastMessage = messages[messages.length - 1] || {};
          return { ...chat, last_message: lastMessage.message || 'No messages yet' };
        }));
        setChats(chatsWithMessages);
      } catch (error) {
        console.error('Error fetching chats:', error);
      }
    };

    fetchChats();
  }, []);

  const fetchMessages = async (chatId) => {
    try {
      const response = await axios.get(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`);
      setMessages(response.data.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const handleChatSelect = (chatId) => {
    setSelectedChatId(chatId);
    fetchMessages(chatId);
  };

  const handleBackButtonClick = () => {
    setSelectedChatId(null);
    setMessages([]);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : ''} ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <NavBar toggleSidebar={toggleSidebar} />
      <div ref={sidebarRef}>
        <Sidebar isOpen={isSidebarOpen} />
      </div>
      <div className={`overlay ${isSidebarOpen ? 'show' : ''}`} onClick={toggleSidebar}></div>
      <div className="content">
        {!isTabletView || !selectedChatId ? (
          <div className={`chat-list-section ${isTabletView && selectedChatId ? 'hide' : ''}`}>
            <ChatList chats={chats} onChatSelect={handleChatSelect} />
          </div>
        ) : null}
        {!isTabletView || selectedChatId ? (
          <div className={`chat-window-section ${isTabletView && !selectedChatId ? 'hide' : ''}`}>
            {selectedChatId ? (
              <ChatWindow messages={messages} onBack={handleBackButtonClick} />
            ) : (
              <div className="chat-window-placeholder">Select a chat to start messaging</div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default App;
