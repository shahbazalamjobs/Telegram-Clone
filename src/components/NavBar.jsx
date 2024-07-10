// Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { IconButton, InputBase, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import '../styles/NavBar.css';

const NavBar = ({ toggleSidebar }) => {
  const isTabletOrSmaller = useMediaQuery('(max-width: 768px)');
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);

  const handleSearchClick = (e) => {
    e.stopPropagation();
    setShowSearch(true);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setShowSearch(false);
    }
  };

  useEffect(() => {
    if (showSearch) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showSearch]);

  return (
    <div className="navbar">
      <div className="menu-icon">
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleSidebar} >
          <MenuIcon  />
        </IconButton>
      </div>
      <div className={`search-container ${showSearch ? 'show' : ''}`} ref={searchRef}>
        {(!isTabletOrSmaller || showSearch) && (
          <>
            <InputBase
              placeholder="Search…"
              className="search-input"
              inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton edge="end" color="inherit" aria-label="search" onClick={handleSearchClick}>
              <SearchIcon className="search-icon" />
            </IconButton>
          </>
        )}
        {isTabletOrSmaller && !showSearch && (
          <IconButton edge="end" color="inherit" aria-label="search" onClick={handleSearchClick}>
            <SearchIcon />
          </IconButton>
        )}
      </div>
    </div>
  );
};

export default NavBar;
