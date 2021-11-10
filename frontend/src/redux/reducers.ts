import { Project } from '../interface/Project';
import { PROJECT_LIST_ITEM_SELECTE, PROJECT_LIST_FETCH_FAILED,
  PROJECT_LIST_FETCH_REQUESTED, PROJECT_LIST_FETCH_SUCCEEDED,
  TAG_LIST_FETCH_REQUESTED,
  TAG_LIST_FETCH_SUCCEEDED } from './constants';

export interface ProjectsState {
    projects: Project[];
  }

const initialState = {
  projects: [],
  tags: [],
  project: null,
  loading: false
};

export type Action = {type: String, payload: any};

export const projectReducer = (
  state: Project[] = initialState.projects,
  action: Action,
) => {
  switch (action.type) {
    case PROJECT_LIST_FETCH_REQUESTED: {
      return { ...state, loading: action.payload };
    }
    case PROJECT_LIST_FETCH_SUCCEEDED: {
      return { ...state, projects: action.payload, loading: false };
    }
    case PROJECT_LIST_ITEM_SELECTE: {
      return { ...state, project: action.payload };
    }
    case TAG_LIST_FETCH_REQUESTED: {
      return { ...state, tags: action.payload };
    }
    case TAG_LIST_FETCH_SUCCEEDED: {
      return { ...state, tags: action.payload };
    }
    default:
      return state;
  }
};
