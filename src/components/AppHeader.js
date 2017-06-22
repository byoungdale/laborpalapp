import React from 'react';
import { Header, Title, Body } from 'native-base';

const AppHeader = (props) => {
  return (
    <Header>
      <Body>
          <Title>{ props.headerText }</Title>
      </Body>
    </Header>
  );
};

export default AppHeader;
