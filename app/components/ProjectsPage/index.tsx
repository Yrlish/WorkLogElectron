import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import ProjectsTable from '../ProjectsTable';
import ProjectsStateModel from '../../models/ProjectsStateModel';
import { addProject } from '../../actions/projects';
import ProjectModel from '../../models/ProjectModel';
import SettingsStateModel from '../../models/SettingsStateModel';
import { globalStateType } from '../../reducers/types';
import { increaseNextProjectId } from '../../actions/settings';

interface Props {
  projects: ProjectsStateModel;
  settings: SettingsStateModel;
  addProject: (project: ProjectModel) => void;
  increaseNextProjectId: () => void;
}

const ProjectsPage = (props: Props) => {
  const handleClick = () => {
    const projectId = parseInt(props.settings.nextProjectId.value, 10);
    const project: ProjectModel = {
      id: projectId,
      name: 'Button Project',
      description: 'Project created by button'
    };
    props.addProject(project);
    props.increaseNextProjectId();
  };

  return (
    <>
      <h2>Projects</h2>
      <p>On this page you can manage your projects.</p>
      <Button onClick={handleClick}>Add project</Button>
      <ProjectsTable projects={props.projects} />
    </>
  );
};

function mapStateToProps(state: globalStateType) {
  return {
    projects: state.projects,
    settings: state.settings
  };
}

export default connect(mapStateToProps, {
  addProject,
  increaseNextProjectId
})(ProjectsPage);
