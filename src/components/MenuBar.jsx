import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { useTranslation } from "react-i18next";
import { menu } from '../common/utils';
import SettingsMenu from './SettingsMenu';

const MenuBar = () => {
  const [translations] = useTranslation("global");

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant='h3' noWrap component="div">
          Chavez Dev
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
          {menu.map((item) => (
            <Typography key={item.key} variant='h6' component="div" sx={{ ml: 1, mr: 1 }}>{translations(item.text)}</Typography>
          ))}
        </Box>
        <SettingsMenu />
      </Toolbar>
    </AppBar >
  )
}

export default MenuBar