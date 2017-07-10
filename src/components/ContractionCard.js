import React, { Component } from 'react';
import {
  Text,
  Card,
  CardItem,
  Button,
  Icon,
  List,
  ListItem,
  Left,
  Right }
from 'native-base';
import { connect } from 'react-redux';
import { handleContractionDeletePress } from '../actions';
import ContractionRatingSection from './ContractionRatingSection';

const formatTime = require('minutes-seconds-milliseconds');

class ContractionCard extends Component {
  handleDeletePress() {
    const { contractions, index } = this.props;
    this.props.handleContractionDeletePress(contractions, index);
  }

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
            <Button transparent danger onPress={this.handleDeletePress.bind(this)}>
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
        <Button
          transparent
        >
          <Text>Leave a note</Text>
        </Button>
      </Card>
    );
  }
}

const mapStateToProps = ({ timer }) => {
  return timer;
};

export default connect(mapStateToProps, {
  handleContractionDeletePress
})(ContractionCard);
