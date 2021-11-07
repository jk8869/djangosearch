import { Project } from '../interface/Project';
import {PROJECT_FETCH_SUCCEEDED, PROJECT_LIST_FETCH_FAILED, PROJECT_LIST_FETCH_REQUESTED, PROJECT_LIST_FETCH_SUCCEEDED} from './constants';

export interface ProjectsState {
    projects: Project[];
  }

const initialState = {
  projects: [],
  project: null
};

export type Action = {type: String, payload: Project[]};

export const projectReducer = (
  state: Project[] = initialState.projects,
  action: Action
) => {
  switch (action.type) {
    case PROJECT_LIST_FETCH_REQUESTED: {
      return { ...state, projects: [] };
    }
    case PROJECT_LIST_FETCH_SUCCEEDED: {
      return { ...state, projects: [action.payload] };
    }
    default:
      return state;
  }
};
