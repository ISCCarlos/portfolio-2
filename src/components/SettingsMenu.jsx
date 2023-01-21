import { Button, Stack } from '@mui/material';
import React from 'react'
import { useTranslation } from "react-i18next";

const SettingsMenu = () => {
  const [translations, i18n] = useTranslation("global");

  return (
    <>
      <Stack spacing={2} direction="row">
        <Button variant='text' sx={{ color: 'white' }} onClick={() => { i18n.changeLanguage('en') }}>{translations("common.english")}</Button>
        <Button variant="text" sx={{ color: 'white' }} onClick={() => { i18n.changeLanguage('es') }}>{translations("common.spanish")}</Button>
      </Stack>
    </>
  )
}

export default SettingsMenu