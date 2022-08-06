import React, { useState, } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import AppsIcon from '@mui/icons-material/Apps';

import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";
import './Header.css';
function Header() {
  const [inputSearch, setInputSearch] = useState('');
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img src="./youtube.png"></img>
        </Link>
        <sup>PK</sup>
      </div>

      <div className="header__input">
        <input spellCheck="false" autoComplete='off' autoCorrect='off' tabIndex="0" onChange={e => setInputSearch(e.target.value)} value={inputSearch} type="text" placeholder='Search' />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className='header__inputButton' />
        </Link>


      </div>
      <div className="header__icons">
        <VideoCallOutlinedIcon className='header__icon' />
        <AppsIcon className='header__icon' />
        <NotificationsOutlinedIcon className='header__icon' />
        <Avatar
          alt="Beenish Hina"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 24, height: 24 }}
        />

      </div>


    </div>
  )
}

export default Header
