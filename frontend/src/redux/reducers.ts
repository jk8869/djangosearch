import { Project } from '../interface/Project';

export interface ProjectsState {
    projects: Project[];
  }

const initialState = {
  projects: [],
};

export type Action = {type: 'FILL_LIST', payload: Project[]};

export const projectReducer = (
  state: Project[] = initialState.projects,
  action: Action
) => {
  switch (action.type) {
    case 'FILL_LIST': {
      return { ...state, projects: [action.payload] };
    }
    default:
      return state;
  }
};
