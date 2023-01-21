import React from 'react'
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const [translations] = useTranslation("global");

  return (
    <div className='page-content'>
      <h1 className='display-1 page-title'>{translations('projects.title')}</h1>
    </div>
  )
}

export default Projects