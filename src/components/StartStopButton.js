import React from 'react';
import { Text, Button, Icon } from 'native-base';

const StartStopButton = ({ onPress, props }) => {
  if (props.running) {
    return (
      <Button
        iconLeft
        rounded
        danger
        style={{ margin: 30 }}
        onPress={onPress}
      >
        <Icon name='pause' />
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
      onPress={onPress}
    >
      <Icon name='play' />
      <Text>Start</Text>
    </Button>
  );
};

export default StartStopButton;
