import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  View,
  Content
} from 'native-base';
import AppHeader from './components/AppHeader';
import ContractionCard from './components/ContractionCard';
import TimerSection from './TimerSection';
import ContractionList from './ContractionList';

class ContractionStopWatch extends Component {
  render() {
    return (
      <Container>
        <Content>
          <AppHeader headerText='StopWatch' />
          <TimerSection />
          <ContractionList />
        </Content>
      </Container>
    );
  }
}

export default ContractionStopWatch;
