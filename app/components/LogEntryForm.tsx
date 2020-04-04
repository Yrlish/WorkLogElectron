import React from 'react';
import { Form } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import { PROJECTS } from '../constants/routes';

export default class LogEntryForm extends React.Component<any, any> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      date: '',
      project: '',
      startTime: '',
      stopTime: '',
      redirectToProjects: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleProjectsButton = this.handleProjectsButton.bind(this);
  }

  // @ts-ignore
  handleChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  };

  private handleProjectsButton(event: MouseEvent) {
    event.preventDefault();
    this.setState({ redirectToProjects: true });
  }

  render() {
    if (this.state.redirectToProjects) {
      return <Redirect to={PROJECTS} />;
    }

    return (
      <Form>
        <Form.Input fluid label="Date" placeholder="YYYY-MM-DD" required />
        <Form.Group>
          <Form.Select
            fluid
            label="Project"
            placeholder="Select a project"
            width={16}
            options={[
              { text: 'Project 1', value: 1 },
              { text: 'Project 2', value: 2 },
              { text: 'Project 3', value: 3 }
            ]}
          />
          <Form.Button
            to={PROJECTS}
            circular
            icon="cog"
            label="&nbsp;"
            // @ts-ignore
            onClick={this.handleProjectsButton}
            style={{ height: '38px', width: '38px' }}
          />
        </Form.Group>
        <Form.Input fluid label="Start time" placeholder="HH:MM" required />
        <Form.Input fluid label="Stop time" placeholder="HH:MM" />
      </Form>
    );
  }
}
