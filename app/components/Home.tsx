import React from 'react';
import { Grid } from 'semantic-ui-react';
import LogEntryForm from './LogEntryForm';
import LogEntryTable from './LogEntryTable';

export default function Home() {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column computer={4} largeScreen={3}>
          <LogEntryForm />
        </Grid.Column>
        <Grid.Column computer={12} largeScreen={13}>
          <LogEntryTable />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
