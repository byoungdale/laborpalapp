import React from 'react';
import { Content, View, H1, Button, Text } from 'native-base';

const formatTime = require('minutes-seconds-milliseconds');

const Time = (props) => {
  if (props.running) {
    return (
      <H1 style={{ padding: 10 }}>
        {formatTime(Date.now() - props.startStamp)}
      </H1>
    )
  }
  return (
    <H1 style={{ padding: 10 }}>
      00:00
    </H1>
  )
}

const TimerCard = (props) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Time startStamp={props.startStamp} running={props.running} />
    </View>
  );
};

export default TimerCard;
