import { Action } from 'redux';
import SettingModel from '../models/SettingModel';
import SettingActionModel from '../models/SettingActionModel';

export const SAVE_SETTING = 'SAVE_SETTING';
export const INCREASE_NEXT_PROJECT_ID_SETTING =
  'INCREASE_NEXT_PROJECT_ID_SETTING';

export function saveSetting(setting: SettingModel): SettingActionModel {
  return {
    payload: { setting },
    type: SAVE_SETTING
  };
}

export function increaseNextProjectId(): Action<string> {
  return {
    type: INCREASE_NEXT_PROJECT_ID_SETTING
  };
}
