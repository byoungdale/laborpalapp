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
    this.props.handleStopPress(timeElapsed);
    this.props.handleAddingContraction(startStamp, timeElapsed, contractions);
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
        <ContractionTimeLine />
      </Content>
    );
  }
}

const mapStateToProps = ({ timer, contractionListManager }) => {
  const { timeElapsed, startStamp, endStamp, running } = timer;
  const { contractions } = contractionListManager;

  return { timeElapsed, startStamp, endStamp, running, contractions };
};

export default connect(mapStateToProps, {
  handleStartPress,
  handleStopPress,
  handleAddingContraction
})(TimerSection);
