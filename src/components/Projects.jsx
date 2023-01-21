import { Link, Stack } from '@mui/material';
import React from 'react'
import { useTranslation } from 'react-i18next';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import MiniPill from './common/MiniPill';
import { projects } from '../common/utils';

const Projects = () => {
  const [translations] = useTranslation("global");

  return (
    <div className='page-content'>
      <h1 className='display-1 page-title'>{translations('projects.title')}</h1>

      <div className="row">

        {projects.map((project) => {
          return (
            <>
              <div className="col-sm-3">
                <div className="card invisible-card">
                  <div className="card-body custom-card-body">
                    <img src={`${project.imgPath}`} className="card-img-top" alt={translations(project.title)} />
                    <h5 className="card-title custom-card-title">{translations(project.title)}</h5>
                    <h6 className="card-text">{translations(project.description)}</h6>
                    <section justifyContent="space-evenly" alignItems="center">
                      {project.technologies.map((technology) => {
                        return (
                          <MiniPill name={technology.name} icon={technology.icon} color={technology.color} />)
                      })}
                    </section>
                    <section className='project-links'>
                      <Stack spacing={2} direction='row'>
                        {project.githubUrl !== '' && (<Link href={project.githubUrl} target="_blank" color='inherit' >
                          <GitHubIcon fontSize='large' />
                        </Link>)}
                        {project.projectUrl !== '' && (<Link href={project.projectUrl} target="_blank" color='inherit' >
                          <LinkIcon fontSize='large' />
                        </Link>)}
                      </Stack>
                    </section>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>

    </div>
  )
}

export default Projects