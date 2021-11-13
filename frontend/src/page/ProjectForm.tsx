/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { Tag, TagConvert } from '../interface/Tag';
import { fetchTagsList } from '../redux/actions';
import { Api } from '../helper/Api';

interface ProjectFormValues {
  title: string;
  descriptions: string;
  featured_image: string;
  demo_link: string;
  source_link: string;
  tags: any;
  vote_ratio: number;
  vote_total: number;
}

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
  if (!tags) { return (<div>loading...</div>); }
  return (
    <div className="content-box">
      <div className="formWrapper">
        <Link className="backButton" to="/projects"><i className="im im-angle-left" /></Link>
        <br />
        <Formik
          initialValues={{
            title: '',
            descriptions: '',
            featured_image: '',
            demo_link: '',
            source_link: '',
            tags: [],
            vote_ratio: 0,
            vote_total: 0,
          }}
          onSubmit={(
            values: ProjectFormValues,
            { setSubmitting }: FormikHelpers<ProjectFormValues>
          ) => {
            api.postProject(JSON.stringify(values, null, 2), ((res: any) => console.log(res)), ((e: any) => console.log(e)));
          }}
        >
          <Form className="form">
            <div className="form__field">
              <label htmlFor="formInput#text">Title: </label>
              <Field
                className="input input--text"
                id="title#text"
                type="text"
                name="title"
                placeholder="Enter title"
              />
            </div>
            <div className="form__field">
              <label htmlFor="formInput#text">Description: </label>
              <Field
                className="input input--text"
                id="descriptions#text"
                name="descriptions"
                placeholder="Enter description"
                as="textarea"
              />
            </div>
            <div className="form__field">
              <label htmlFor="formInput#text">Featured Image: </label>
              <Field
                className="input input--text"
                id="featured_image#file"
                type="file"
                name="featured_image"
                placeholder="choose file"
              />
            </div>
            <div className="form__field">
              <label htmlFor="formInput#text">Demo link: </label>
              <Field
                className="input input--text"
                id="demo_link#text"
                type="text"
                name="demo_link"
                placeholder="http://example-demo.com"
              />
            </div>
            <div className="form__field">
              <label htmlFor="formInput#text">Source link: </label>
              <Field
                className="input input--text"
                id="source_link#text"
                type="text"
                name="source_link"
                placeholder="http://example-source.com"
              />
            </div>
            <div className="form__field">
              <label htmlFor="formInput#select">Tags: </label>
              <Field
                component="select"
                className="input input--text"
                name="tags"
                multiple
              >
                {tags.map((tag: Tag, index: Number) => <option value={`${tag.id}`}>{tag.name}</option>)}
              </Field>
            </div>

            <div className="form__field">
              <label htmlFor="formInput#text">Vote total: </label>
              <Field
                className="input input--text"
                id="vote_total#number"
                type="number"
                name="vote_total"
                placeholder="Enter vote total"
              />
            </div>
            <div className="form__field">
              <label htmlFor="formInput#text">Vote ratio: </label>
              <Field
                className="input input--text"
                id="vote_ratio#number"
                type="number"
                name="vote_ratio"
                placeholder="Enter vote ratio"
              />
            </div>
            <input className="btn btn--sub btn--lg  my-md" type="submit" value="Submit" />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  tags: state.tags
});

export default connect(mapStateToProps)(ProjectForm);
