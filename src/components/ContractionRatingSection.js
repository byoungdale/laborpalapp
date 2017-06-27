import React from 'react';
import { CardItem, Button, Body} from 'native-base';
const Emoji = require('react-native-emoji').default;

const ContractionRatingSection = () => {
  return (
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
  );
};

export default ContractionRatingSection;
