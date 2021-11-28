import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { Api } from '../helper/Api';
import { PROJECT_LIST_ITEM_SELECTE, PROJECT_LIST_FETCH_FAILED,
  PROJECT_LIST_FETCH_REQUESTED, PROJECT_LIST_FETCH_SUCCEEDED,
  TAG_LIST_FETCH_REQUESTED,
  TAG_LIST_FETCH_SUCCEEDED } from './constants';

export function* fetchProjects(): any {
  try {
    const api = new Api();
    const projectList = yield call(api.getProjects);
    yield put({ type: PROJECT_LIST_FETCH_SUCCEEDED, payload: projectList });
  } catch (e) {
    console.log(e);
  }
}

export function* appSaga() {
  yield takeEvery(PROJECT_LIST_FETCH_REQUESTED, fetchProjects);
}
