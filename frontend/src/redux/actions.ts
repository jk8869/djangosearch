import { Project } from '../interface/Project';
import { Action } from './reducers';

export const fillProjectsList = (projects: Project[]): Action => ({
  type: 'FILL_LIST',
  payload: projects,
});
