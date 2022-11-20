import { Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from "react-i18next";

const About = () => {
  const [translations] = useTranslation("global");

  return (
    <Typography variant='body1'>{translations("about.content")}</Typography>
  )
}

export default About