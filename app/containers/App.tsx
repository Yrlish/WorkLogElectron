import React, { ReactNode } from 'react';
import { Container } from 'semantic-ui-react';
import TitleBar from '../components/TitleBar';

type Props = {
  children: ReactNode;
};

export default function App(props: Props) {
  const { children } = props;

  return (
    <>
      <TitleBar />
      <Container fluid>{children}</Container>
    </>
  );
}
