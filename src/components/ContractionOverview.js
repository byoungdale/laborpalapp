import React from 'react';
import { Card, CardItem, Text, Right, Left, Icon } from 'native-base';

const formatTime = require('minutes-seconds-milliseconds');

const ContractionOverview = (props) => {
  return (
      <Card>
        <CardItem icon style={{ justifyContent: 'flex-start' }}>
          <Icon name="clock" />
          <Text>
            <Text style={{fontWeight: "bold"}}>Total Time:</Text> {formatTime(props.contraction.timeElapsed)}
          </Text>
        </CardItem>
        <CardItem icon style={{ justifyContent: 'flex-start' }}>
          <Icon name="play" />
          <Text>
            <Text style={{fontWeight: "bold"}}>Start Time:</Text> {props.contraction.startStamp.toLocaleString()}
          </Text>
        </CardItem>
        <CardItem icon style={{ justifyContent: 'flex-start' }}>
          <Icon name="hand" />
          <Text>
            <Text style={{fontWeight: "bold"}}>Stop Time:</Text> {props.contraction.endStamp.toLocaleString()}
          </Text>
        </CardItem>
      </Card>
    );
};

export default ContractionOverview;
