/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Project } from '../interface/Project';

type ProjectItemProps = {
    project: Project;
}

export default function ProjectPage({ project } : ProjectItemProps) {
  return (
    <main className="singleProject my-md">
      <div className="container">
        <div className="layout">
          <div className="column column--1of3">
            <h3 className="singleProject__subtitle">Tools & Stacks</h3>
            <div className="singleProject__toolStack">

              {project.tags.map((tag, index) => (
                <span className="tag tag--pill tag--sub tag--lg">
                  <small>{tag}</small>
                </span>
              ))}

            </div>
            {project.source_link ? (
              <a className="singleProject__liveLink" href="#" target="_blank">
                <i className="im im-external-link" />
                Source Code
              </a>
            ) : null}

          </div>
          <div className="column column--2of3">
            <img className="singleProject__preview" src="{{ project.featured_image.url }}" alt="portfolio thumbnail" />
            <a href="profile.html" className="singleProject__developer">Md. Shahriar Parvez</a>
            <h2 className="singleProject__title">{project.title}</h2>
            <h3 className="singleProject__subtitle">About the Project</h3>
            <div className="singleProject__info">
              {project.descriptions}
            </div>

            <div className="comments">
              <h3 className="singleProject__subtitle">Feedback</h3>
              <h5 className="project--rating">
                {project.vote_ratio}
                % Postitive Feedback (
                {project.vote_total}
                ) Vote
                {project.vote_total}
              </h5>

              <form className="form" action="#" method="POST">
                <div className="form__field">
                  <label htmlFor="formInput#textarea">Comments: </label>
                  <textarea
                    className="input input--textarea"
                    name="message"
                    id="formInput#textarea"
                    placeholder="Write your comments here..."
                  />
                </div>
                <input className="btn btn--sub btn--lg" type="submit" value="Comments" />
              </form>
              <div className="commentList">
                <div className="comment">
                  <a href="profile.html">
                    <img
                      className="avatar avatar--md"
                      src="https://pbs.twimg.com/profile_images/1335382240931368961/b3wSZKj4_400x400.jpg"
                      alt="user"
                    />
                  </a>
                  <div className="comment__details">
                    <a href="profile.html" className="comment__author">Sulamita Ivanov</a>
                    <p className="comment__info">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit alias numquam perferendis
                      mollitia minus minima exercitationem possimus ab deserunt qui, soluta iusto doloribus eveniet
                      similique consequuntur ratione, dignissimos ut magni laborum quo.
                    </p>
                  </div>
                </div>
                <div className="comment">
                  <a href="profile.html">
                    <img className="avatar avatar--md" src="https://avatars.githubusercontent.com/u/33843378" alt="user" />
                  </a>
                  <div className="comment__details">
                    <a href="profile.html" className="comment__author">Dennis Ivanov</a>
                    <p className="comment__info">
                      Consectetur adipisicing elit. Reprehenderit alias numquam perferendis mollitia minus minima
                      exercitationem possimus ab deserunt qui, ratione, dignissimos ut magni laborum quo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
