import React from 'react';
import { Form } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { PROJECTS } from '../../constants/routes';
import ProjectsStateModel from '../../models/ProjectsStateModel';
import DateFormInput from '../DateFormInput';

interface Props {
  projects: ProjectsStateModel;
}

interface State {
  date: string;
  project: number;
  redirectToProjects: boolean;
  startTime: string;
  stopTime: string;
}

class LogEntryForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      date: '',
      project: 0,
      redirectToProjects: false,
      startTime: '',
      stopTime: ''
    };

    this.dateCallback = this.dateCallback.bind(this);
    this.onProjectCogButton = this.onProjectCogButton.bind(this);
  }

  private onProjectCogButton(event: MouseEvent) {
    event.preventDefault();
    this.setState({ redirectToProjects: true });
  }

  private dateCallback(date: string) {
    this.setState({ date });
  }

  render() {
    if (this.state.redirectToProjects) {
      return <Redirect to={PROJECTS} />;
    }

    const projectsList: { text: string; value: string }[] = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const value of Object.values(this.props.projects)) {
      projectsList.push({
        text: value.name,
        value: value.id
      });
    }

    return (
      <Form>
        <DateFormInput dateCallback={this.dateCallback} />
        <Form.Group>
          <Form.Select
            fluid
            label="Project"
            placeholder="Select a project"
            width={16}
            options={projectsList}
          />
          <Form.Button
            to={PROJECTS}
            circular
            icon="cog"
            label="&nbsp;"
            // @ts-ignore
            onClick={this.onProjectCogButton}
            style={{ height: '38px', width: '38px' }}
          />
        </Form.Group>
        <Form.Input fluid label="Start time" placeholder="HH:MM" required />
        <Form.Input fluid label="Stop time" placeholder="HH:MM" />
      </Form>
    );
  }
}

function mapStateToProps(state: { projects: ProjectsStateModel }) {
  return {
    projects: state.projects
  };
}

export default connect(mapStateToProps, null)(LogEntryForm);
