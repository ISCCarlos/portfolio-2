import { Stack } from '@mui/material';
import React from 'react'
import { useTranslation } from "react-i18next";
import { mobileMenu } from '../common/utils';
import SettingsMenu from './SettingsMenu';

const MenuBar = () => {
  const [translations] = useTranslation("global");

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-primary-custom navbar-sticky">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">Chavez Dev</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <section className="navigation">
            <Stack spacing={2} direction="column">
              {mobileMenu.map((item) => (
                <li className="nav-item" key={item.key}>
                  <a style={{ color: 'white', textDecoration: 'none' }} href={"#" + item.key}>{translations(item.text)}</a>
                </li>
              ))}
            </Stack>
          </section>
          <section className='language-selector'>
            <SettingsMenu />
          </section>
        </div>
      </div>
    </nav>
  )
}

export default MenuBar