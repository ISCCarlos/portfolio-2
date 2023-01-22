import { Accordion, AccordionDetails, AccordionSummary, Stack } from '@mui/material';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { techStack } from '../common/utils'
import Pill from './common/Pill';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const TechStack = () => {
  const [translations] = useTranslation("global");

  const [expanded, setExpanded] = useState('languages');

  const programmingLanguages = techStack[0].programmingLanguages;
  const frameworks = techStack[0].frameworks;
  const dataBase = techStack[0].dataBase;
  const devOps = techStack[0].devOps;
  const oS = techStack[0].oS;

  return (
    <div className='page-content'>
      <h1 className='display-1 page-title'>{translations('menu.techStack')}</h1>

      <Accordion expanded={expanded === 'languages'} onChange={() => setExpanded('languages')}
        sx={{ backgroundColor: 'transparent' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#86e5ff' }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <h1 className='display-6 page-subtitle'>{translations('skills.programmingLanguages')}</h1>
        </AccordionSummary>
        <AccordionDetails>
          <Stack
            direction={{ xs: 'column', sm: 'column', md: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            {programmingLanguages.map((language) => (
              <Pill key={language.name} name={language.name} icon={language.icon} color={language.color} />
            ))}
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'frameworks'} onChange={() => setExpanded('frameworks')} sx={{ backgroundColor: 'transparent' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#86e5ff' }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <h1 className='display-6 page-subtitle'>{translations('skills.frameworks')}</h1>
        </AccordionSummary>
        <AccordionDetails>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            {frameworks.map((framework) => (
              <Pill key={framework.name} name={framework.name} icon={framework.icon} color={framework.color} />
            ))}
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'dataBase'} onChange={() => setExpanded('dataBase')} sx={{ backgroundColor: 'transparent' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#86e5ff' }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <h1 className='display-6 page-subtitle'>{translations('skills.dataBase')}</h1>
        </AccordionSummary>
        <AccordionDetails>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            {dataBase.map((dataBase) => (
              <Pill key={dataBase.name} name={dataBase.name} icon={dataBase.icon} color={dataBase.color} />
            ))}
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'infrastructure'} onChange={() => setExpanded('infrastructure')} sx={{ backgroundColor: 'transparent' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#86e5ff' }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <h1 className='display-6 page-subtitle'>{translations('skills.infrastructure')}</h1>
        </AccordionSummary>
        <AccordionDetails>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            {devOps.map((devOp) => (
              <Pill key={devOp.name} name={devOp.name} icon={devOp.icon} color={devOp.color} />
            ))}
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'operativeSystems'} onChange={() => setExpanded('operativeSystems')} sx={{ backgroundColor: 'transparent' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#86e5ff' }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <h1 className='display-6 page-subtitle'>{translations('skills.operativeSystems')}</h1>
        </AccordionSummary>
        <AccordionDetails>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            {oS.map((os) => (
              <Pill key={os.name} name={os.name} icon={os.icon} color={os.color} />
            ))}
          </Stack>
        </AccordionDetails>
      </Accordion>
    </div>

  )
}

export default TechStack;