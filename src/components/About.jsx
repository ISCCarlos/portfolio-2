import { Divider, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from "react-i18next";

const About = () => {
  const [translations] = useTranslation("global");

  return (
    <div className='card-page'>
      <Typography variant="h3" >{translations("about.title")}</Typography>
      <Divider width={'95%'} sx={{ ml: '2.5%' }} />
    </div>
  )
}

export default About