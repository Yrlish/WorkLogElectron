import React from 'react';
import { Form } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { InputOnChangeData } from 'semantic-ui-react/dist/commonjs/elements/Input/Input';
import { PROJECTS } from '../../constants/routes';
import ProjectsStateModel from '../../models/ProjectsStateModel';
import { DATE_REGEX } from '../../constants/regex';

interface Props {
  projects: ProjectsStateModel;
}

enum ValidationStatus {
  EMPTY,
  INVALID,
  VALID
}

interface State {
  date: string;
  dateClass: string;
  dateValidation: ValidationStatus;
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
      dateClass: '',
      dateValidation: ValidationStatus.EMPTY,
      project: 0,
      redirectToProjects: false,
      startTime: '',
      stopTime: ''
    };

    this.onProjectCogButton = this.onProjectCogButton.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
  }

  private onDateChange(...args: [any, InputOnChangeData]) {
    const [, data] = args;
    const { value } = data;

    if (value !== '') {
      if (!DATE_REGEX.test(value)) {
        this.setState({
          date: '',
          dateValidation: ValidationStatus.INVALID,
          dateClass: 'error'
        });
      } else {
        this.setState({
          date: value,
          dateValidation: ValidationStatus.VALID,
          dateClass: ''
        });
      }
    } else {
      this.setState({
        date: value,
        dateValidation: ValidationStatus.EMPTY,
        dateClass: ''
      });
    }
  }

  private onProjectCogButton(event: MouseEvent) {
    event.preventDefault();
    this.setState({ redirectToProjects: true });
  }

  render() {
    if (this.state.redirectToProjects) {
      return <Redirect to={PROJECTS} />;
    }

    const projectsList: { text: string; value: string }[] = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const [, value] of Object.entries(this.props.projects)) {
      projectsList.push({
        text: value.name,
        value: value.id
      });
    }

    return (
      <Form>
        <Form.Input
          fluid
          label="Date"
          placeholder="YYYY-MM-DD"
          required
          onChange={this.onDateChange}
          className={this.state.dateClass}
        />
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
