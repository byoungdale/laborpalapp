import React, { Component } from 'react';
import { Content, Body, View } from 'native-base';
import { connect } from 'react-redux';
import { handleStartPress, handleStopPress } from './actions';
import TimerCard from './components/TimerCard';
import StartStopButton from './components/StartStopButton';

class TimerSection extends Component {
  onStartPress() {
    const { running, startStamp } = this.props;
    this.props.handleStartPress(running, startStamp);
  }

  onStopPress() {
    const { running, timeElapsed } = this.props;
    this.props.handleStopPress(running, timeElapsed);
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
          </Body>
        </View>
      </Content>
    );
  }
}

const mapStateToProps = ({ timer }) => {
  const { timeElapsed, startStamp, endStamp, running } = timer;

  return { timeElapsed, startStamp, endStamp, running };
};

export default connect(mapStateToProps, {
  handleStartPress,
  handleStopPress
})(TimerSection);
