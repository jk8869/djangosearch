import test from 'tape';
import { call, put } from 'redux-saga/effects';
import { Api } from '../../helper/Api';
import { fetchProjects } from '../../redux/sagas';
import { PROJECT_LIST_ITEM_SELECTE, PROJECT_LIST_FETCH_FAILED,
  PROJECT_LIST_FETCH_REQUESTED, PROJECT_LIST_FETCH_SUCCEEDED,
  TAG_LIST_FETCH_REQUESTED,
  TAG_LIST_FETCH_SUCCEEDED } from '../../redux/constants';
import { Project } from '../../interface/Project';

const projects: Project[] = [];

test('fetch projects', (t: any) => {
  const iterator = fetchProjects();
  const api = new Api();

  let next = iterator.next();
  t.deepEqual(next.value, call(api.getProjects), 'must yield api.getProjects');

  next = iterator.next();
  t.deepEqual(next.value, put({ type: PROJECT_LIST_FETCH_SUCCEEDED, payload: projects }));
});
