import React from 'react'
import "../styles/header.scss";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Button, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { saveAs } from "file-saver";

const Header = () => {
  const [translations, i18n] = useTranslation("global");

  const getCV = () => {
    const language = i18n.language;

    const file = "../../assets/docs/" + language + "_CV.pdf";

    saveAs(file, "CV.pdf");
  };

  return (
    <div className="header" id="home">
      <h1 className="display-1 title">Chavez</h1>
      <h1 className="display-1 sub-title">Dev</h1>

      <div className='main-links'>
        <Button variant='outlined' sx={{ color: 'white', borderColor: 'white' }} onClick={getCV}>{translations('contact.cv')}</Button>
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