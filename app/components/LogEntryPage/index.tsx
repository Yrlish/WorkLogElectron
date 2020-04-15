import React from 'react';
import { connect } from 'react-redux';
import LogEntryForm from '../LogEntryForm';
import LogEntryTable from '../LogEntryTable';
import ProjectsStateModel from '../../models/ProjectsStateModel';

import styles from './styles.scss';

interface Props {
  projects: ProjectsStateModel;
}

const LogEntryPage = (props: Props) => {
  return (
    <div className={styles.row}>
      <div className={styles.formColumn}>
        <LogEntryForm projects={props.projects} />
      </div>
      <div className={styles.tableColumn}>
        <LogEntryTable />
      </div>
    </div>
  );
};

function mapStateToProps(state: { projects: ProjectsStateModel }) {
  return {
    projects: state.projects
  };
}

export default connect(mapStateToProps, null)(LogEntryPage);
