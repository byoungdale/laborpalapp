import React, { Component } from 'react';
import { Container, TabHeading, Icon, Text, Tabs, Tab } from 'native-base';
import TimerSection from './TimerSection';
import ResourceSection from './ResourceSection';
import ChartSection from './ChartSection';

class MainView extends Component {
  render() {
    return (
      <Container>
        <Tabs initialPage={1}>
          <Tab heading={<TabHeading><Icon name="stopwatch" /><Text>Timer</Text></TabHeading>}>
            <TimerSection />
          </Tab>
            <Tab heading={<TabHeading><Icon name="stats" /><Text>Charts</Text></TabHeading>}>
            <ChartSection />
          </Tab>
          <Tab heading={<TabHeading><Icon name="hammer" /><Text>Resources</Text></TabHeading>}>
            <ResourceSection />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default MainView;
