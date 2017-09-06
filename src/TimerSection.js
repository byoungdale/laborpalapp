import React, { Component } from 'react';
import { Content, Body, View } from 'native-base';
import { connect } from 'react-redux';
import { handleStartPress, handleStopPress, handleAddingContraction } from './actions';
import TimerCard from './components/TimerCard';
import StartStopButton from './components/StartStopButton';
import ContractionTimeLine from './components/ContractionTimeLine';

class TimerSection extends Component {
  onStartPress() {
    const { running, startStamp } = this.props;
    this.props.handleStartPress(running, startStamp);
  }

  onStopPress() {
    const { timeElapsed, startStamp, contractions } = this.props;
    console.log(`TimerSection > onStopPress > timeElapsed: ${timeElapsed}`);
    this.props.handleStopPress(startStamp);
    this.props.handleAddingContraction(startStamp, timeElapsed, contractions);
  }

  render() {
    return (
      <Content>
        <TimerCard startStamp={this.props.startStamp} running={this.props.running} />
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
        <ContractionTimeLine />
      </Content>
    );
  }
}

const mapStateToProps = ({ stopwatch, contractionListManager }) => {
  const { timeElapsed, startStamp, endStamp, running, timer } = stopwatch;
  const { contractions } = contractionListManager;
  return { timeElapsed, startStamp, endStamp, timer, running, contractions };
};

export default connect(mapStateToProps, {
  handleStartPress,
  handleStopPress,
  handleAddingContraction
})(TimerSection);
