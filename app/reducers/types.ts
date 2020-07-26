import { Action, Store as ReduxStore } from 'redux';
import ProjectsStateModel from '../models/ProjectsStateModel';
import SettingsStateModel from '../models/SettingsStateModel';

export type globalStateType = {
  projects: ProjectsStateModel;
  settings: SettingsStateModel;
};

export type Store = ReduxStore<globalStateType, Action<string>>;
