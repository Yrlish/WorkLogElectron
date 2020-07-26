import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import projects from './projects';
import settings from './settings';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    projects,
    settings
  });
}
