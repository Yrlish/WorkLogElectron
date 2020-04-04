import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './containers/App';
import HomePage from './containers/HomePage';
import ProjectsPage from './components/ProjectsPage';
import { HOME, PROJECTS } from './constants/routes';

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route path={PROJECTS} component={ProjectsPage} />
        <Route path={HOME} component={HomePage} />
      </Switch>
    </App>
  );
}
