import React, { Component } from 'react';
import { TouchableHighlight } from 'react-native';
import {
  Container,
  View,
  Text,
  H1,
  H3,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Body,
  ListItem,
  Right,
  Left
} from 'native-base';

const formatTime = require('minutes-seconds-milliseconds');
const Emoji = require('react-native-emoji').default;

class ContractionTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeElapsed: null,
      startTime: null,
      running: false,
      laps: []
    };
  }

  header() {
    return (
      <Header>
        <Body>
            <Title>StopWatch</Title>
        </Body>
      </Header>
    );
  }

  timerDisplay() {
    return (
      <H1 style={{ padding: 10 }}>
        {formatTime(this.state.timeElapsed)}
      </H1>
    );
  }

  startStopButton() {
    if (this.state.running) {
      return (
        <Button
          iconLeft
          rounded
          danger
          style={{ margin: 30 }}
          onPress={this.handleStartStopPress.bind(this)}
        >
          <Icon name='ios-pause' />
          <Text>Stop</Text>
        </Button>
      );
    }

    return (
      <Button
        iconLeft
        rounded
        success
        style={{ margin: 30 }}
        onPress={this.handleStartStopPress.bind(this)}
      >
        <Icon name='ios-play' />
        <Text>Start</Text>
      </Button>
    );
  }

  lapButton() {
    console.log('pressed lap button');
    return (
      <Button
        iconLeft
        rounded
        style={{ margin: 30 }}
        onPress={this.handleLapPress.bind(this)}
      >
        <Icon name='ios-stopwatch' />
        <Text>Done</Text>
      </Button>
    );
  }

  laps() {
    return this.state.laps.map((time, index) => {
      return (
        <Content key={index}>
          <ListItem icon>
            <Left>
              <Text>Contraction #{index + 1}</Text>
            </Left>
            <Right>
              <Text>Time: {formatTime(time)}</Text>
            </Right>
          </ListItem>
          <ListItem>
            <Text>Rate your contraction</Text>
          </ListItem>
          <ListItem>
            <Body style={{
                flex: 1,
                flexDirection: 'row',
            }}>
              <Button light>
                <Emoji name="relaxed" />
              </Button>
              <Button light>
                <Emoji name="neutral_face" />
              </Button>
              <Button light>
                <Emoji name="sweat" />
              </Button>
              <Button light>
                <Emoji name="sleepy" />
              </Button>
              <Button light>
                <Emoji name="fearful" />
              </Button>
              <Button light>
                <Emoji name="sob" />
              </Button>
              <Button light>
                <Emoji name="triumph" />
              </Button>
              <Button light>
                <Emoji name="baby" />
              </Button>
            </Body>
          </ListItem>
        </Content>
      );
    });
  }

  handleStartStopPress() {
    console.log(this.state);
    if (this.state.running) {
      clearInterval(this.interval);
      this.setState({ running: false });
      return;
    }

    this.setState({ startTime: new Date() });

    this.interval = setInterval(() => {
      this.setState({
        timeElapsed: new Date() - this.state.startTime,
        running: true
      });
    }, 30);
  }

  handleLapPress() {
    console.log('handleLapPress');
    const lap = this.state.timeElapsed;
    this.setState({
      startTime: new Date(),
      laps: this.state.laps.concat([lap])
    });
  }

  renderApp() {
    return (
      <Container>
        {this.renderMainView()}
      </Container>
    );
  }

  renderMainView() {
    return (
      <Content>
        {this.header()}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {this.timerDisplay()}
        </View>
        <View>
          <Body
            style={{
              flex: 2,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {this.startStopButton()}
            {this.lapButton()}
          </Body>
        </View>
        <View>
         {this.laps()}
        </View>
      </Content>
    );
  }

  render() {
    return (
      <Container>
        {this.renderApp()}
      </Container>
    );
  }
}

export default ContractionTimer;
