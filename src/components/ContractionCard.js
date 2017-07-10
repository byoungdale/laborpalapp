import React, { Component } from 'react';
import {
  Text,
  H1,
  Card,
  CardItem,
  Button,
  Icon,
  List,
  ListItem,
  Left,
  Right }
from 'native-base';
import ContractionRatingSection from './ContractionRatingSection';
import ContractionNote from './ContractionNote';

const formatTime = require('minutes-seconds-milliseconds');

class ContractionCard extends Component {
  render() {
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
          <CardItem header><Text>Contraction</Text></CardItem>
          <CardItem>
            <Button transparent danger>
              <Icon name="ios-close-circle-outline" />
            </Button>
          </CardItem>
        </CardItem>
        <List>
          <ListItem icon>
            <Left>
              <Icon name="play" />
            </Left>
            <Right>
              <Text>
                {this.props.contraction.startStamp.toLocaleString()}
              </Text>
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon name="hand" />
            </Left>
            <Right>
              <Text>
                {this.props.contraction.endStamp.toLocaleString()}
              </Text>
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon name="clock" />
            </Left>
            <Right>
              <Text>
                {formatTime(this.props.contraction.timeElapsed)}
              </Text>
            </Right>
          </ListItem>
        </List>
        <CardItem header>
          <Text>Rate your contraction</Text>
        </CardItem>
        <ContractionRatingSection />
          <H1>
            <Text>Leave a note</Text>
          </H1>
        <ContractionNote />
      </Card>
    );
  }
}

export default ContractionCard;
