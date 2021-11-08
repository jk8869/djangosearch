import { Project } from '../interface/Project';
import { Action } from './reducers';
import { PROJECT_LIST_ITEM_SELECTE, PROJECT_LIST_FETCH_FAILED, PROJECT_LIST_FETCH_REQUESTED, PROJECT_LIST_FETCH_SUCCEEDED } from './constants';

export const requestProjectsList = () : Action => ({
  type: PROJECT_LIST_FETCH_REQUESTED,
  payload: true
});

export const fetchProjectsList = (projects: Project[]): Action => ({
  type: PROJECT_LIST_FETCH_SUCCEEDED,
  payload: projects,
});

export const selectProject = (project: Project): Action => ({
  type: PROJECT_LIST_ITEM_SELECTE,
  payload: project
});
