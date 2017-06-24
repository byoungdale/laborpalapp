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
import { handleStartPress, handleStopPress, handleContractionPress } from './actions';
import AppHeader from './components/AppHeader';

const formatTime = require('minutes-seconds-milliseconds');
const Emoji = require('react-native-emoji').default;

class ContractionTimer extends Component {
  onStartPress() {
    const { running, startTime, timeElapsed } = this.props;
    this.props.handleStartPress(running, startTime, timeElapsed);
  }

  onStopPress() {
    const { running } = this.props;
    this.props.handleStopPress(running);
  }

  onContractionPress() {
    const { timeElapsed, startTime, contractions } = this.props;
    this.props.handleContractionPress(timeElapsed, startTime, contractions);
  }

  startStopButton() {
    if (this.props.running) {
      return (
        <Button
          iconLeft
          rounded
          danger
          style={{ margin: 30 }}
          onPress={this.onStopPress.bind(this)}
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
        onPress={this.onStartPress.bind(this)}
      >
        <Icon name='ios-play' />
        <Text>Start</Text>
      </Button>
    );
  }

  contractionButton() {
    return (
      <Button
        iconLeft
        rounded
        style={{ margin: 30 }}
        onPress={this.onContractionPress.bind(this)}
      >
        <Icon name='ios-stopwatch' />
        <Text>Done</Text>
      </Button>
    );
  }

  listContractions() {
    return this.props.contractions.map((time, index) => {
      return (
        <Content key={index}>
          <ListItem icon>
            <Left>
              <Text>Contraction #{index + 1}</Text>
            </Left>
            <Body>
              <Text>Time: {formatTime(time)}</Text>
            </Body>
            <Right>
              <Right>
                <Button transparent danger>
                  <Icon name="ios-close-circle-outline" />
                </Button>
              </Right>
            </Right>
          </ListItem>
          <ListItem>
            <Text>Rate your contraction</Text>
          </ListItem>
          <ListItem>
            <Body
              style={{
                flex: 1,
                flexDirection: 'row',
              }}
            >
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
            {this.contractionButton()}
          </Body>
        </View>
        <View>
         {this.listContractions()}
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
  const { timeElapsed, startTime, running, contractions } = timer;

  return { timeElapsed, startTime, running, contractions };
};

export default connect(mapStateToProps, {
  handleStartPress,
  handleStopPress,
  handleContractionPress
})(ContractionTimer);
