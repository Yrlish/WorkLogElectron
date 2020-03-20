import { remote } from 'electron';

export function MinimizeWindow() {
  remote.getCurrentWindow().minimize();
}

export function ToggleMaximizeWindow() {
  if (remote.getCurrentWindow().isMaximized()) {
    remote.getCurrentWindow().unmaximize();
  } else {
    remote.getCurrentWindow().maximize();
  }
}

export function CloseWindow() {
  remote.getCurrentWindow().close();
}
