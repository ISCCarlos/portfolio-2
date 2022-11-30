import { Divider, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from "react-i18next";

const About = () => {
  const [translations] = useTranslation("global");

  return (
    <div className='card-page'>
      <Divider component="div" role="presentation">
        <Typography variant="h3">{translations("about.title")}</Typography>
      </Divider>
      <Typography variant="h6" mt={5}>
        {translations("about.content", { experience: 6 })}
      </Typography>
      <Typography variant="h6">
        {translations("about.content1")}
      </Typography>
    </div>
  )
}

export default About