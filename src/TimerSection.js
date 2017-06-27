import React, { Component } from 'react';
import { Content, Body, View, Toast } from 'native-base';
import { connect } from 'react-redux';
import { handleStartPress, handleStopPress, handleContractionPress } from './actions';
import TimerCard from './components/TimerCard';
import StartStopButton from './components/StartStopButton';
import ContractionButton from './components/ContractionButton';

class TimerSection extends Component {
  onStartPress() {
    const { running, startTime, timeElapsed } = this.props;
    this.props.handleStartPress(running, startTime, timeElapsed);
  }

  onStopPress() {
    const { running, timeElapsed } = this.props;
    this.props.handleStopPress(running, timeElapsed);
  }

  onContractionPress() {
    Toast.show({
      supportedOrientations: ['portrait', 'landscape'],
      text: 'Great job!',
      position: 'bottom',
      buttonText: 'Thanks'
    });
    const { timeElapsed, startTime, contractions } = this.props;
    this.props.handleContractionPress(timeElapsed, startTime, contractions);
  }

  render() {
    return (
      <Content>
        <TimerCard timeElapsed={this.props.timeElapsed} />
        <View>
          <Body
            style={{
              flex: 2,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
          <StartStopButton
            props={this.props}
            onPress={this.props.running ?
              this.onStopPress.bind(this) :
              this.onStartPress.bind(this)}
          />
          <ContractionButton onPress={this.onContractionPress.bind(this)} />
          </Body>
        </View>
      </Content>
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
})(TimerSection);
