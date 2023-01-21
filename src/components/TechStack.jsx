import { Stack } from '@mui/material';
import React from 'react'
import { useTranslation } from 'react-i18next';
import { techStack } from '../common/utils'
import Pill from './common/Pill';

const TechStack = () => {
  const [translations] = useTranslation("global");

  const programmingLanguages = techStack[0].programmingLanguages;
  const frameworks = techStack[0].frameworks;
  const dataBase = techStack[0].dataBase;
  const devOps = techStack[0].devOps;
  const oS = techStack[0].oS;

  return (
    <div className='page-content'>
      <h1 className='display-1 page-title'>{translations('skills.title')}</h1>

      <h1 className='display-6 page-subtitle'>{translations('skills.programmingLanguages')}</h1>

      <Stack direction='row' spacing={2}>
        {programmingLanguages.map((language) => (
          <Pill name={language.name} icon={language.icon} color={language.color} />
        ))}
      </Stack>

      <h1 className='display-6 page-subtitle'>{translations('skills.frameworks')}</h1>

      <Stack direction='row' spacing={2}>
        {frameworks.map((framework) => (
          <Pill name={framework.name} icon={framework.icon} color={framework.color} />
        ))}
      </Stack>

      <h1 className='display-6 page-subtitle'>{translations('skills.dataBase')}</h1>

      <Stack direction='row' spacing={2}>
        {dataBase.map((dataBase) => (
          <Pill name={dataBase.name} icon={dataBase.icon} color={dataBase.color} />
        ))}
      </Stack>

      <h1 className='display-6 page-subtitle'>{translations('skills.infrastructure')}</h1>

      <Stack direction='row' spacing={2}>
        {devOps.map((devOp) => (
          <Pill name={devOp.name} icon={devOp.icon} color={devOp.color} />
        ))}
      </Stack>

      <h1 className='display-6 page-subtitle'>{translations('skills.operativeSystems')}</h1>

      <Stack direction='row' spacing={2}>
        {oS.map((os) => (
          <Pill name={os.name} icon={os.icon} color={os.color} />
        ))}
      </Stack>

    </div>

  )
}

export default TechStack;