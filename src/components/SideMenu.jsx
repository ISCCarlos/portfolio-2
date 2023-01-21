import { Avatar } from '@mui/material';
import React from 'react'
import { useTranslation } from 'react-i18next';
import { menu } from '../common/utils'
import SettingsMenu from './SettingsMenu';


const SideMenu = () => {
  const [translations] = useTranslation("global");

  return (
    <div className="side-menu">
      <section className="avatar-container">
        <Avatar alt="Chavez Dev" src="./assets/me.jpg" sx={{ width: '10vw', height: 'auto', position: 'relative', top: '10vh', left: '5vw' }} />
      </section>
      <section className="navigation">
        <ul>
          {menu.map((item) => (
            <li className="nav-item" key={item.key}>
              <a style={{ color: 'white', textDecoration: 'none' }} href={"#" + item.key}>{translations(item.text)}</a>
            </li>
          ))}
        </ul>
      </section>
      <section className='language-selector'>
        <SettingsMenu />
      </section>
    </div>
  )
}

export default SideMenu