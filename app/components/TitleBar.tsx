import { Container, Icon, Menu } from 'semantic-ui-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { remote } from 'electron';
import styles from './TitleBar.scss';
import routes from '../constants/routes.json';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default class TitleBar extends React.Component<any, any> {
  private static MinimizeWindow() {
    remote.getCurrentWindow().minimize();
  }

  private static CloseWindow() {
    remote.getCurrentWindow().close();
  }

  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      maximizeIcon: 'window maximize outline',
      maximizeTitle: 'Maximize'
    };
    this.ToggleMaximizeWindow = this.ToggleMaximizeWindow.bind(this);
  }

  private ToggleMaximizeWindow() {
    if (remote.getCurrentWindow().isMaximized()) {
      remote.getCurrentWindow().unmaximize();
      this.setState({
        maximizeIcon: 'window maximize outline',
        maximizeTitle: 'Maximize'
      });
    } else {
      remote.getCurrentWindow().maximize();
      this.setState({
        maximizeIcon: 'window restore outline',
        maximizeTitle: 'Unmaximize'
      });
    }
  }

  render() {
    /* eslint-disable react/destructuring-assignment */
    return (
      <Menu fixed="top" className={styles['title-bar']}>
        <Container fluid>
          <Menu.Item as="div" header>
            WorkLog
          </Menu.Item>
          <Menu.Item as={Link} to={routes.HOME}>
            Start
          </Menu.Item>
          <Menu.Item as={Link} to={routes.PROJECTS}>
            Projects
          </Menu.Item>
          <Menu.Item as={Link} to={routes.COUNTER}>
            Demo app page
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item
              as="a"
              onClick={TitleBar.MinimizeWindow}
              title="Minimize"
            >
              <Icon name="window minimize outline" />
            </Menu.Item>
            <Menu.Item
              as="a"
              onClick={this.ToggleMaximizeWindow}
              title={this.state.maximizeTitle}
            >
              <Icon name={this.state.maximizeIcon} />
            </Menu.Item>
            <Menu.Item as="a" onClick={TitleBar.CloseWindow} title="Close">
              <Icon name="window close outline" />
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}
