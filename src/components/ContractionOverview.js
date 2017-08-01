import React from 'react';
import { Card, CardItem, Text, Right, Left, Icon } from 'native-base';

const formatTime = require('minutes-seconds-milliseconds');

const ContractionOverview = (props) => {
  return (
      <Card>
        <CardItem icon style={{ justifyContent: 'space-around' }}>
          <Icon name="clock" />
          <Text>
            {formatTime(props.contraction.timeElapsed)}
          </Text>
        </CardItem>
        <CardItem icon style={{ justifyContent: 'space-around' }}>
          <Icon name="play" />
          <Text>
            {props.contraction.startStamp.toLocaleString()}
          </Text>
        </CardItem>
        <CardItem icon style={{ justifyContent: 'space-around' }}>
          <Icon name="hand" />
          <Text>
            {props.contraction.endStamp.toLocaleString()}
          </Text>
        </CardItem>
      </Card>
    );
};

export default ContractionOverview;
