import React from 'react'
import "../styles/header.scss";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import { IconButton } from '@mui/material';

const Header = () => {
  return (
    <div className='header'>
      <p className="title">Chavez</p>
      <p className="sub-title">Dev</p>

      <div className='main-links'>
        <IconButton
          size='large'
          aria-label="LinkedIn"
          aria-controls="LinkedIn"
          aria-haspopup="true"
          color="inherit" ><LinkedInIcon /></IconButton>
        <IconButton
          size='large'
          aria-label="Github"
          aria-controls="Github"
          aria-haspopup="true"
          color="inherit" ><GitHubIcon /></IconButton>
        <IconButton
          size='large'
          aria-label="Telegram"
          aria-controls="Telegram"
          aria-haspopup="true"
          color="inherit" ><TelegramIcon /></IconButton>
      </div>
    </div>
  )
}

export default Header