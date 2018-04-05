import React, { Component } from 'react';
import { Container, Icon, Text } from 'native-base';
import TimerSection from './TimerSection';

class MainView extends Component {
  render() {
    return (
      <Container>
        <TimerSection />
      </Container>
    );
  }
}

export default MainView;
