import { Container, Icon, Menu } from 'semantic-ui-react';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  CloseWindow,
  MinimizeWindow,
  ToggleMaximizeWindow
} from '../utils/WindowManagement';
import styles from './TitleBar.scss';
import routes from '../constants/routes.json';

export default function TitleBar() {
  return (
    <Menu fixed="top" className={styles.titlebar}>
      <Container fluid>
        <Menu.Item as="span" header>
          <Icon name="home" />
          WorkLog
        </Menu.Item>
        <Menu.Item as={Link} to={routes.HOME}>
          Start
        </Menu.Item>
        <Menu.Item as={Link} to={routes.PROJECTS}>
          Projects
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item as="a" onClick={MinimizeWindow}>
            <Icon name="window minimize" />
          </Menu.Item>
          <Menu.Item as="a" onClick={ToggleMaximizeWindow}>
            <Icon name="window maximize" />
          </Menu.Item>
          <Menu.Item as="a" onClick={CloseWindow}>
            <Icon name="window close" />
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
}
