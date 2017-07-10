import React from 'react';
import { Content, View, H1, Button, Text } from 'native-base';

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
      <Button
        transparent
        style={{
          position: 'absolute',
          right: 0,
          top: 0
        }}
      >
        <Text>Reset</Text>
      </Button>
      <H1 style={{ padding: 10 }}>
        {formatTime(props.timeElapsed)}
      </H1>
    </View>
  );
};

export default TimerCard;
