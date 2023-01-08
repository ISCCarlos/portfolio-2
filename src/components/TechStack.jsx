import React from 'react'
import { techStack } from '../common/utils'
import Pill from './common/Pill';

const TechStack = () => {
  const programmingLanguages = techStack[0].programmingLanguages;
  const frameworks = techStack[0].frameworks;
  const devOps = techStack[0].devOps;
  const oS = techStack[0].oS;

  return (
    <div>
      <div className="tech-stack-content">
        <div className="pills">
          {programmingLanguages.map((language) => (
            <Pill name={language.name} icon={language.icon} color={language.color} />
          ))}
        </div>
        <div className="pills">
          {frameworks.map((framework) => (
            <Pill name={framework.name} icon={framework.icon} color={framework.color} />
          ))}
        </div>
        <div className="pills">
          {devOps.map((devOp) => (
            <Pill name={devOp.name} icon={devOp.icon} color={devOp.color} />
          ))}
        </div>
        <div className="pills">
          {oS.map((os) => (
            <Pill name={os.name} icon={os.icon} color={os.color} />
          ))}
        </div></div>
    </div >
  )
}

export default TechStack;