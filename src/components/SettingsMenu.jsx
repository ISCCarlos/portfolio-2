import { FormControl, IconButton, InputLabel, Menu, MenuItem, NativeSelect, Tooltip } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import SettingsIcon from "@mui/icons-material/Settings";

const SettingsMenu = () => {
  const [translations, i18n] = useTranslation("global");
  const [anchorEl, setAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = () => {
    const value = document.getElementById("language").value;
    i18n.changeLanguage(value);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id="settings-menu"
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="language">
            {translations("header.settings.language")}
          </InputLabel>
          <NativeSelect
            id="language"
            onChange={handleLanguageChange}
            defaultValue={i18n.language}
          >
            <option value="en">{translations("common.english")}</option>
            <option value="es">{translations("common.spanish")}</option>
          </NativeSelect>
        </FormControl>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Tooltip title={translations("header.settings.title")}>
        <IconButton size="large"
          edge="start"
          aria-label="menu"
          aria-controls="settings-menu"
          aria-haspopup="true"
          onClick={handleMenuOpen}>
          <SettingsIcon style={{ color: 'white' }} />
        </IconButton>
      </Tooltip>

      {renderMenu}
    </>
  )
}

export default SettingsMenu