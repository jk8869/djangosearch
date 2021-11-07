import { Project } from '../interface/Project';
import { Action } from './reducers';
import {PROJECT_FETCH_SUCCEEDED, PROJECT_LIST_FETCH_FAILED, PROJECT_LIST_FETCH_REQUESTED, PROJECT_LIST_FETCH_SUCCEEDED} from './constants';

export const fillProjectsList = (projects: Project[]): Action => ({
  type: PROJECT_LIST_FETCH_REQUESTED,
  payload: projects,
});
