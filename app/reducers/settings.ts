import SettingsStateModel from '../models/SettingsStateModel';
import SettingActionModel from '../models/SettingActionModel';
import {
  INCREASE_NEXT_PROJECT_ID_SETTING,
  SAVE_SETTING
} from '../actions/settings';

const defaultState: SettingsStateModel = {
  nextProjectId: {
    key: 'nextProjectId',
    value: '1'
  }
};

export default function settings(
  state: SettingsStateModel = defaultState,
  action: SettingActionModel
): SettingsStateModel {
  switch (action.type) {
    case SAVE_SETTING:
      return {
        ...state,
        [action.payload.setting.key]: action.payload.setting
      };
    case INCREASE_NEXT_PROJECT_ID_SETTING:
      // eslint-disable-next-line no-case-declarations
      const nextId = parseInt(state.nextProjectId.value, 10) + 1;
      // eslint-disable-next-line no-case-declarations
      const nextIdStr = String(nextId);
      return {
        ...state,
        nextProjectId: {
          key: 'nextProjectId',
          value: nextIdStr
        }
      };
    default:
      return state;
  }
}
