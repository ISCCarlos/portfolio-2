import React from 'react'
import { useTranslation } from "react-i18next";

const About = () => {
  const [translations] = useTranslation("global");

  return (
    <div className="about-content">
      <img src="../../assets/me.jpg" alt="chavez-dev" />
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