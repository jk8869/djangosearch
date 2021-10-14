/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import ProjectItem from '../component/ProjectItem';
import { Project, ProjectConvert } from '../interface/Project';
import { ProjectsState } from '../redux/reducers';
import { fillProjectsList } from '../redux/actions';

export default function ProjectList() {
  const [projects, setProject] = useState<Project[]>();
  const dispatch = useDispatch();

  const getProjects = () => {
    axios.get('http://localhost:8000/api')
      .then((response: any) => response.data)
      .then((data) => {
        const tempProjects : Project[] = [];
        data.map((item: string) => {
          tempProjects?.push(
            ProjectConvert.toProject(JSON.stringify(item))
          );
        });
        setProject(tempProjects);
        dispatch(fillProjectsList(tempProjects));
      });
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (

    <main className="projects">
      <section className="hero-section text-center">
        <div className="container container--narrow">
          <div className="hero-section__box">
            <h2>
              Search for
              {' '}
              <span>Projects</span>
            </h2>
          </div>

          <div className="hero-section__search">
            <form className="form" action="#" method="get">
              <div className="form__field">
                <label htmlFor="formInput#search">Search By Projects </label>
                <input
                  className="input input--text"
                  id="formInput#search"
                  type="text"
                  name="text"
                  placeholder="Search by Project Title"
                />
              </div>

              <input className="btn btn--sub btn--lg" type="submit" value="Search" />
            </form>
          </div>
        </div>
      </section>
      <section className="projectsList">
        <div className="container">
          <div className="grid grid--three">
            {projects?.map((project: Project) => (
              <ProjectItem
                key={project.id}
                project={project}
              />
            ))}

          </div>
        </div>
      </section>
    </main>
  );
}
