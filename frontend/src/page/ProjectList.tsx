/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import ProjectItem from '../component/ProjectItem';
import { Project } from '../interface/Project';
import { requestProjectsList } from '../redux/actions';

const ProjectList = (props : any) => {
  const dispatch = useDispatch();
  const { loading, projects } = props;

  useEffect(() => {
    dispatch(requestProjectsList());
  }, []);

  if (loading || !projects) { return (<div>loading...</div>); }

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
};

const mapStateToProps = (state : any) => ({
  loading: state.loading,
  projects: state.projects
});

export default connect(mapStateToProps)(ProjectList);
