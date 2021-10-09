/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React from 'react';
import { Project } from '../interface/project';

type ProjectItemProps = {
    project: Project;
}

export default function ProjectItem({ project } : ProjectItemProps) {
  return (
    <div className="column">
      <div className="card project">
        <a href={project.id} className="project">
          <img className="project__thumbnail" src={project.featured_image} alt="project thumbnail" />
        </a>
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
