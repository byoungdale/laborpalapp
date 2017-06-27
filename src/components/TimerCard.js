import React from 'react';
import { View, H1 } from 'native-base';
const Emoji = require('react-native-emoji').default;
const formatTime = require('minutes-seconds-milliseconds');

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
      <H1 style={{ padding: 10 }}>
        {formatTime(props.timeElapsed)}
      </H1>
    </View>
  );
};

export default TimerCard;
