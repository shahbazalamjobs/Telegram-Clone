import React, { useContext } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, IconButton, ButtonBase } from '@mui/material';
import { AccountCircleOutlined, AccountBoxOutlined, CallOutlined, PeopleOutlined, BookmarkBorderOutlined, SettingsOutlined, AddOutlined, BuildOutlined, Brightness4Outlined } from '@mui/icons-material';
import { DarkModeContext } from '../context/DarkModeContext'; 
import '../styles/Sidebar.css';

const Sidebar = ({ isOpen }) => {
    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''} ${isDarkMode ? 'dark-mode' : ''}`}>
            <div className="profile-section">
                <div className="profile-icon">
                    <AccountCircleOutlined fontSize="large" />
                </div>
                <div className="profile-info">
                    <div className="profile-name">Beyond Chat</div>
                    <div className="profile-contact">+91 999999999</div>
                </div>
                <div className="dark-mode-section">
                    <IconButton onClick={toggleDarkMode}>
                        <Brightness4Outlined /> 
                    </IconButton>   
                    Toggle                 
                </div>
            </div>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem component={ButtonBase}>
                    <ListItemIcon>
                        <AccountBoxOutlined />
                    </ListItemIcon>
                    <ListItemText primary="My Profile" className="list-item-text" />
                </ListItem>
                <ListItem component={ButtonBase}>
                    <ListItemIcon>
                        <CallOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Contacts" className="list-item-text" />
                </ListItem>
                <ListItem component={ButtonBase}>
                    <ListItemIcon>
                        <PeopleOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Calls" className="list-item-text" />
                </ListItem>
                <ListItem component={ButtonBase}>
                    <ListItemIcon>
                        <BookmarkBorderOutlined />
                    </ListItemIcon>
                    <ListItemText primary="People Nearby" className="list-item-text" />
                </ListItem>
                <ListItem component={ButtonBase}>
                    <ListItemIcon>
                        <SettingsOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Settings" className="list-item-text" />
                </ListItem>
                <ListItem component={ButtonBase}>
                    <ListItemIcon>
                        <AddOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Invite Friends" className="list-item-text" />
                </ListItem>
                <ListItem component={ButtonBase}>
                    <ListItemIcon>
                        <BuildOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Features" className="list-item-text" />
                </ListItem>
            </List>
        </div>
    );
};

export default Sidebar;
