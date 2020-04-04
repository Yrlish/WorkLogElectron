import { Action, Store as ReduxStore } from 'redux';
import ProjectsStateModel from '../models/ProjectsStateModel';

export type globalStateType = {
  projects: ProjectsStateModel;
};

export type Store = ReduxStore<globalStateType, Action<string>>;
