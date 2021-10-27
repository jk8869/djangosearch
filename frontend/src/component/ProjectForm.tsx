/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectForm() {
  return (
    <div className="content-box">
      <div className="formWrapper">
        <Link className="backButton" to="/projects"><i className="im im-angle-left" /></Link>
        <br />

        <form className="form" method="POST">
          <div className="form__field">
            <label htmlFor="formInput#text">Text Field: </label>
            <input
              className="input input--text"
              id="formInput#text"
              type="text"
              name="text"
              placeholder="Enter text"
            />
          </div>
          <div className="form__field">
            <label htmlFor="formInput#text">Text Field: </label>
            <input
              className="input input--text"
              id="formInput#text"
              type="text"
              name="text"
              placeholder="Enter text"
            />
          </div>
          <div className="form__field">
            <label htmlFor="formInput#text">Text Field: </label>
            <input
              className="input input--text"
              id="formInput#text"
              type="text"
              name="text"
              placeholder="Enter text"
            />
          </div>
          <input className="btn btn--sub btn--lg  my-md" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
