import React from 'react';
import { Text, Card, CardItem, Button, Body, Icon } from 'native-base';

const Emoji = require('react-native-emoji').default;
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
      <CardItem>
        <Body
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'
          }}
        >
          <Button light>
            <Emoji name="relaxed" />
          </Button>
          <Button light>
            <Emoji name="neutral_face" />
          </Button>
          <Button light>
            <Emoji name="sweat" />
          </Button>
          <Button light>
            <Emoji name="sleepy" />
          </Button>
          <Button light>
            <Emoji name="fearful" />
          </Button>
          <Button light>
            <Emoji name="sob" />
          </Button>
          <Button light>
            <Emoji name="triumph" />
          </Button>
          <Button light>
            <Emoji name="baby" />
          </Button>
        </Body>
      </CardItem>
    </Card>
  );
};

export default ContractionCard;
