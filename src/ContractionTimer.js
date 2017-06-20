import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  View,
  Text,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Body
} from 'native-base';
import { runTimer, startTimer, stopTimer, progressTimer } from './actions';

class ContractionTimer extends Component {
  onStartButtonPress() {
    console.log('pressed start');
    this.props.runTimer();
  }

  onStopButtonPress() {
    stopTimer();
  }

  onTimerElapsed() {
    this.props.progressTimer();
  }

  format() {
    const pad = (time, length) => {
      while (time.length < length) {
         return `0${time}`;
      }
      return time;
    };

    if (this.props.time) {
      const formattedTime = new Date(this.props.time);
      const m = pad(formattedTime.getMinutes().toString(), 2);
      const s = pad(formattedTime.getSeconds().toString(), 2);
      const ms = pad(formattedTime.getMilliseconds().toString(), 3);

      return `${m}:${s}:${ms}`;
    }

    return '00:00:00';
  }

  renderStartStop() {
    if (this.props.running) {
      return (
        <Button
          iconLeft
          rounded
          danger
          style={{ margin: 30 }}
          onPress={this.onStopButtonPress.bind(this)}
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
        onPress={this.onStartButtonPress.bind(this)}
      >
        <Icon name='ios-play' />
        <Text>Start</Text>
      </Button>
    );
  }

  renderTime() {
    return (
      <Text style={{ fontSize: 50 }}>{this.format(this.props.timeElapsed)}</Text>
    );
  }

  render() {
  return (
    <Container>
      <Header>
        <Body>
            <Title>StopWatch</Title>
        </Body>
      </Header>
      <Content>
        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Body>
            {this.renderTime()}
          </Body>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
        {this.renderStartStop()}
      </View>
      </Content>
    </Container>
    );
  }
}

const mapStateToProps = (timer) => {
  console.log(timer);
  const { contractions, offset, running, timeElapsed, startTime } = timer;

  return { contractions, offset, running, timeElapsed, startTime };
};

export default connect(mapStateToProps, {
  runTimer,
  startTimer,
  progressTimer,
  stopTimer
})(ContractionTimer);
