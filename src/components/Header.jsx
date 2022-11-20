import React from 'react'
import "../styles/header.scss";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Link } from '@mui/material';

const Header = () => {
  return (
    <div className='header'>
      <p className="title">Chavez</p>
      <p className="sub-title">Dev</p>

      <div className='main-links'>
        <Link href='https://www.linkedin.com/in/carlos-giovanni-ch%C3%A1vez-arias-5502b3212/' target='_blank' color='inherit'><LinkedInIcon fontSize='large' /></Link>
        <Link href="https://github.com/ISCCarlos" target="_blank" color='inherit' >
          <GitHubIcon fontSize='large' />
        </Link>
        <Link href="https://t.me/carlos_chavez" target="_blank" color='inherit'>
          <TelegramIcon fontSize='large' />
        </Link>
      </div>
    </div>
  )
}

export default Header