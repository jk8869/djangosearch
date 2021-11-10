/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { Tag, TagConvert } from '../interface/Tag';
import { fetchTagsList } from '../redux/actions';
import { Api } from '../helper/Api';

const ProjectForm = (props: any) => {
  const { tags } = props;
  const dispatch = useDispatch();
  const api = new Api();

  useEffect(() => {
    api.getTags((data: any) => {
      const tempTags : Tag[] = [];
      data.map((item: string) => {
        tempTags?.push(
          TagConvert.toTag(JSON.stringify(item))
        );
      });
      dispatch(fetchTagsList(tempTags));
    }, (e: any) => {

    });
  }, []);
  return (
    <div className="content-box">
      <div className="formWrapper">
        <Link className="backButton" to="/projects"><i className="im im-angle-left" /></Link>
        <br />

        <form className="form" method="POST">
          <div className="form__field">
            <label htmlFor="formInput#select">Tags: </label>
            <select
              className="input input--text"
              multiple
            >
              {tags.map((tag: Tag, index: Number) => <option value="grapefruit">{tag.name}</option>)}
            </select>
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
};

const mapStateToProps = (state: any) => ({
  tags: state.tags
});

export default connect(mapStateToProps)(ProjectForm);
