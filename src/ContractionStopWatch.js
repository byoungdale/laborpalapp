import React, { Component } from 'react';
import {
  Container,
  Content
} from 'native-base';
import TimerSection from './TimerSection';
import ContractionList from './ContractionList';

class ContractionStopWatch extends Component {
  render() {
    return (
      <Container>
        <Content>
          <TimerSection />
          <ContractionList />
        </Content>
      </Container>
    );
  }
}

export default ContractionStopWatch;
