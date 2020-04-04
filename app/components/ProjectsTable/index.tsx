import { Table } from 'semantic-ui-react';
import React from 'react';
import ProjectsStateModel from '../../models/ProjectsStateModel';

export default function ProjectsPage(props: { projects: ProjectsStateModel }) {
  const { projects } = props;
  const isEmpty: boolean = Object.keys(projects).length === 0;
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {isEmpty ? (
          <Table.Row>
            <Table.Cell colSpan={2}>There are no projects</Table.Cell>
          </Table.Row>
        ) : (
          Object.keys(projects).map(key => {
            return (
              <Table.Row key={`project-${key}`}>
                {/*
                 // @ts-ignore */}
                <Table.Cell>{projects[key].id}</Table.Cell>
                {/*
                 // @ts-ignore */}
                <Table.Cell>{projects[key].name}</Table.Cell>
                {/*
                 // @ts-ignore */}
                <Table.Cell>{projects[key].description}</Table.Cell>
              </Table.Row>
            );
          })
        )}
      </Table.Body>
    </Table>
  );
}
