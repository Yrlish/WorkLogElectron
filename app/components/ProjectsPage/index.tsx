import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import ProjectsTable from '../ProjectsTable';
import ProjectsStateModel from '../../models/ProjectsStateModel';
import { addProject } from '../../actions/projects';
import ProjectModel from '../../models/ProjectModel';

interface Props {
  projects: ProjectsStateModel;
  addProject: (project: ProjectModel) => void;
}

const ProjectsPage = (props: Props) => {
  const handleClick = () => {
    const project: ProjectModel = {
      id: Object.keys(props.projects).length + 1,
      name: 'Button Project',
      description: 'Project created by button'
    };
    props.addProject(project);
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

function mapStateToProps(state: { projects: ProjectsStateModel }) {
  return {
    projects: state.projects
  };
}

export default connect(mapStateToProps, { addProject })(ProjectsPage);
