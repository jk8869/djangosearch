/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../interface/Project';
import ProjectPage from '../page/Project';

type ProjectItemProps = {
    project: Project;
}

export default function ProjectItem({ project } : ProjectItemProps) {
  return (
    <div className="column">
      <div className="card project">
        <Link to={`project/${project.id}`} state={{ project }} component={ProjectPage} className="project">
          <img className="project__thumbnail" src={project.featured_image} alt="project thumbnail" />
        </Link>
        <div className="card__body">
          <h3 className="project__title">{project.title}</h3>
          <p><a className="project__author" href={project.id}>By Dennis Ivanov</a></p>
          <p className="project--rating">
            <span style={{ fontWeight: 'bold' }}>
              {project.vote_ratio}
              %
            </span>
            {' '}
            Positive
            Feedback (
            {project.vote_total}
            {' '}
            Vote
            {project.vote_total}
            )
          </p>
          <div className="project__tags">
            {project.tags.map((tag, index) => (
              <span key={index} className="tag tag--pill tag--main">
                <small>{tag}</small>
              </span>
            )) }

          </div>
        </div>
      </div>
    </div>
  );
}
