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
    <div key={'projects-container'} className='page-content' id="projects">
      <h1 className='display-1 page-title' key="projectsPageTitle">{translations('projects.title')}</h1>

      <div className="row" id="projects-cardContainer">

        {projects.map((project) => {
          return (
            <>
              <div className="col-sm-3" key={project.title + '-container'}>
                <div className="card invisible-card" key={project.title + '-card'}>
                  <div className="card-body custom-card-body" key={project.title + '-bodyCard'}>
                    <img key={project.title + '-image'} src={`${project.imgPath}`} className="card-img-top" alt={translations(project.title)} />
                    <h5 key={project.title + '-cardTitle'} className="card-title custom-card-title">{translations(project.title)}</h5>
                    <h6 key={project.title + '-cardSubtitle'} className="card-text">{translations(project.description)}</h6>
                    <section key={project.title + '-projectTechnologies'}>
                      {project.technologies.map((technology) => {
                        return (
                          <MiniPill key={project.title + '-' + technology.name} name={technology.name} icon={technology.icon} color={technology.color} />)
                      })}
                    </section>
                    <section className='project-links' key={project.title + '-projectLinks'}>
                      <Stack key={project.title + '-linksContainer'} spacing={2} direction='row'>
                        {project.githubUrl !== '' && (<Link key={project.title + '-githubLink'} href={project.githubUrl} target="_blank" color='inherit' >
                          <GitHubIcon key={project.title + '-githubIcon'} fontSize='large' />
                        </Link>)}
                        {project.projectUrl !== '' && (<Link key={project.title + '-link'} href={project.projectUrl} target="_blank" color='inherit' >
                          <LinkIcon key={project.title + '-icon'} fontSize='large' />
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