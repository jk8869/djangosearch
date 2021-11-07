import { Project } from '../interface/Project';
import { PROJECT_LIST_ITEM_SELECTE, PROJECT_LIST_FETCH_FAILED, PROJECT_LIST_FETCH_REQUESTED, PROJECT_LIST_FETCH_SUCCEEDED } from './constants';

export interface ProjectsState {
    projects: Project[];
  }

const initialState = {
  projects: [],
  project: null
};

export type Action = {type: String, payload: any};

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
    case PROJECT_LIST_ITEM_SELECTE: {
      return { ...state, project: action.payload };
    }
    default:
      return state;
  }
};
