import React from 'react'
import { useTranslation } from "react-i18next";
import { menu } from '../common/utils';
import SettingsMenu from './SettingsMenu';

const MenuBar = () => {
  const [translations] = useTranslation("global");

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark navbar-sticky">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">Chavez Dev</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            {menu.map((item) => (
              <li className="nav-item" key={item.key}>
                <a className="nav-link" style={{ color: 'white' }} href={"#" + item.key}>{translations(item.text)}</a>
              </li>
            ))}
            <li className="nav-item">
              <SettingsMenu />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default MenuBar