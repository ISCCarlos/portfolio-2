import React from 'react'
import { useTranslation } from "react-i18next";

const About = () => {
  const [translations] = useTranslation("global");

  return (
    <div className="page-content">
      <h1 className='display-1 page-title'>{translations('about.title')}</h1>
      <p className="card-text">
        {translations("about.contentParagraph0", { experience: 6 })}
        <br />
        <br />
        {translations("about.contentParagraph1")}
      </p>
    </div>
  )
}

export default About