import React from 'react';
import { Text, Card, CardItem, Button, Icon } from 'native-base';
import ContractionRatingSection from './ContractionRatingSection';
const formatTime = require('minutes-seconds-milliseconds');

const ContractionCard = (props) => {
  return (
    <Card>
      <CardItem
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text>Contraction #{props.index + 1}</Text>
        <Text>Time: {formatTime(props.time)}</Text>
        <Button transparent danger>
          <Icon name="ios-close-circle-outline" />
        </Button>
      </CardItem>
      <CardItem>
        <Text>Rate your contraction</Text>
      </CardItem>
      <ContractionRatingSection />
    </Card>
  );
};

export default ContractionCard;
