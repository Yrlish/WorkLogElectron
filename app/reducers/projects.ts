import { ADD_PROJECT } from '../actions/projects';
import ProjectsStateModel from '../models/ProjectsStateModel';
import ProjectsActionModel from '../models/ProjectsActionModel';

const defaultState: ProjectsStateModel = {
  1: {
    id: 1,
    name: 'Dummy project',
    description: 'This project is a dummy default project stores inside Redux.'
  }
};

export default function projects(
  state: ProjectsStateModel = defaultState,
  action: ProjectsActionModel
): ProjectsStateModel {
  switch (action.type) {
    case ADD_PROJECT:
      return {
        ...state,
        [action.payload.project.id]: action.payload.project
      };
    default:
      return state;
  }
}
