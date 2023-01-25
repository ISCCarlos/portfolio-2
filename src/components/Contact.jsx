import { Box, Button, Link, Snackbar, Stack, styled, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import emailjs from "emailjs-com";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white',
  },
  '& label': {
    color: 'white'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
      color: 'white'
    },
    '&:hover fieldset': {
      borderColor: '#86e5ff',
      color: '#86e5ff'
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
      color: 'white'
    },
  },
});

const Contact = () => {
  const [translations] = useTranslation("global");
  const [open, setOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("warning");
  const [message, setMessage] = useState("");

  const resetFields = () => {
    document.getElementById("name").value = '';
    document.getElementById("message").value = '';
    document.getElementById("mail").value = '';
  };

  const handleClose = () => {
    setOpen(false);
  };

  const showAlert = () => {
    setOpen(true);
  };

  const serviceID = "service_uce0tye";
  const templateID = "template_92kulkn";
  const userID = "kfgV-GW04lXMbcHbX";

  const sendEmail = () => {
    let error = false;
    const fromName = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    const replyTo = document.getElementById("mail").value;

    if (fromName === "") {
      error = true;
      setAlertSeverity("warning");
      setMessage("common.invalidName");
      showAlert();
    }

    if (message === "") {
      error = true;
      setAlertSeverity("warning");
      setMessage("common.invalidMessage");
      showAlert();
    }

    if (replyTo === "") {
      error = true;
      setAlertSeverity("warning");
      setMessage("common.invalidMail");
      showAlert();
    }

    if (!error) {
      emailjs
        .send(
          serviceID,
          templateID,
          {
            from_name: fromName,
            phone: message,
            reply_to: replyTo,
          },
          userID
        )
        .then(() => {
          error = false;
          resetFields();
          setAlertSeverity("success");
          setMessage("common.successMail");
          showAlert();
        });
    }
  };

  return (
    <div className='page-content' id="contact">
      <h1 className='display-1 page-title'>{translations('menu.contact')}</h1>
      <span className="spacer"></span>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={alertSeverity}
          sx={{ width: "100%" }}
        >
          {translations(message)}
        </Alert>
      </Snackbar>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <CssTextField
          id="name"
          label={translations("contact.name")}
          fullWidth
        />
        <CssTextField
          id="mail"
          type="email"
          label={translations("contact.email")}
          fullWidth
        />
      </Stack>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <CssTextField
          id="message"
          label={translations("contact.message")}
          multiline
          rows={4}
          fullWidth
          margin='normal'
        />
      </Stack>
      <Box
        sx={{ width: "90%", maxWidth: "90%", ml: "5%", textAlign: "center" }}
      >
        <Button
          type="submit"
          variant="contained"
          sx={{ m: 1 }}
          onClick={sendEmail}
        >
          {translations("contact.submit")}
        </Button>
      </Box>
      <span className="spacer"></span>
      <div className='main-links'>
        <Link href="mailto:carlos.chavez.arias@gmail.com" target="_blank" color='inherit' >
          <EmailIcon fontSize='large' />
        </Link>
        <Link href='https://www.linkedin.com/in/carlos-giovanni-ch%C3%A1vez-arias-5502b3212/' target='_blank' color='inherit'><LinkedInIcon fontSize='large' /></Link>
        <Link href="https://github.com/ISCCarlos" target="_blank" color='inherit' >
          <GitHubIcon fontSize='large' />
        </Link>
        <Link href="https://t.me/carlos_chavez" target="_blank" color='inherit'>
          <TelegramIcon fontSize='large' />
        </Link>
      </div>
    </div>
  )
}

export default Contact