import { Action } from 'redux';
import ProjectModel from './ProjectModel';

export default interface ProjectsActionModel extends Action<string> {
  type: string;
  payload: {
    project: ProjectModel;
  };
}
