import { Action } from 'redux';
import SettingModel from './SettingModel';

export default interface SettingActionModel extends Action<string> {
  type: string;
  payload: {
    setting: SettingModel;
  };
}
