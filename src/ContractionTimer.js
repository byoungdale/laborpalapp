import React, { Component } from 'react';
import { TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import {
  Container,
  View,
  Text,
  H1,
  Content,
  Button,
  Icon,
  Body,
  ListItem,
  Right,
  Left
} from 'native-base';
import { handleStartStopPress } from './actions';
import AppHeader from './components/AppHeader';

const formatTime = require('minutes-seconds-milliseconds');
const Emoji = require('react-native-emoji').default;

class ContractionTimer extends Component {
  onStartStopPress() {
    const { running, startTime } = this.props;
    this.props.handleStartStopPress(running, startTime);
  }

  startStopButton() {
    if (this.props.running) {
      return (
        <Button
          iconLeft
          rounded
          danger
          style={{ margin: 30 }}
          onPress={this.onStartStopPress.bind(this)}
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
        onPress={this.onStartStopPress.bind(this)}
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
    return this.props.laps.map((time, index) => {
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

  handleLapPress() {
    console.log('handleLapPress');
    const lap = this.props.timeElapsed;
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
        <AppHeader headerText='StopWatch' />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <H1 style={{ padding: 10 }}>
            {formatTime(this.props.timeElapsed)}
          </H1>
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

const mapStateToProps = ({ timer }) => {
  const { timeElapsed, startTime, running, laps } = timer;

  return { timeElapsed, startTime, running, laps };
};

export default connect(mapStateToProps, { handleStartStopPress })(ContractionTimer);
