import ProjectsActionModel from '../models/ProjectsActionModel';
import ProjectModel from '../models/ProjectModel';

export const ADD_PROJECT = 'ADD_PROJECT';

export function addProject(project: ProjectModel): ProjectsActionModel {
  return {
    payload: { project },
    type: ADD_PROJECT
  };
}
