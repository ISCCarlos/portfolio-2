import React from 'react'
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const [translations] = useTranslation("global");

  return (
    <div className='page-content'>
      <h1 className='display-1 page-title'>{translations('menu.contact')}</h1>
    </div>
  )
}

export default Contact