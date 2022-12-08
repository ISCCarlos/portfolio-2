import { Avatar, Card, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from "react-i18next";

const About = () => {
  const [translations] = useTranslation("global");

  return (
    <div className='card-page'>
      <Divider component="div" role="presentation">
        <Typography variant="h3">{translations("about.title")}</Typography>
      </Divider>
      <Card sx={{ height: '85vh' }}>
        <Grid container spacing={2}>
          <Grid item sm={6} xs={12}>
            <Avatar
              alt="chavez-dev"
              src='../../assets/me.jpg'
              sx={{
                width: { xs: '100%', sm: '85%' },
                height: { xs: '100%', sm: '85%' },
                marginTop: { xs: 'none', sm: 5 },
                marginLeft: { xs: 'none', sm: 10 }
              }}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography variant="h6" mt={{ sm: 10, xs: 1 }} ml={{ sm: 10, xs: 'none' }} width={{ sm: '80%', xs: '100%' }}>
              {translations("about.contentParagraph0", { experience: 6 })}
            </Typography>
            <Typography variant="h6" mt={{ sm: 10, xs: 1 }} ml={{ sm: 10, xs: 'none' }} width={{ sm: '80%', xs: '100%' }}>
              {translations("about.contentParagraph1")}
            </Typography>
            <Typography variant="h6" mt={{ sm: 10, xs: 1 }} ml={{ sm: 10, xs: 'none' }} width={{ sm: '80%', xs: '100%' }}>
              {translations("about.contentParagraph2")}
            </Typography>
            <Typography variant="h6" mt={{ sm: 10, xs: 1 }} ml={{ sm: 10, xs: 'none' }} width={{ sm: '80%', xs: '100%' }}>
              {translations("about.contentParagraph3")}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </div >
  )
}

export default About