import React from 'react';
import { Text, Button, Icon } from 'native-base';

const ContractionButton = ({ onPress }) => {
  return (
    <Button
      iconLeft
      rounded
      style={{ margin: 30 }}
      onPress={onPress}
    >
      <Icon name='ios-stopwatch' />
      <Text>Done</Text>
    </Button>
  );
};

export default ContractionButton;
