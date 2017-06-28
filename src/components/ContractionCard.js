import React, { Component } from 'react';
import { Text, Card, CardItem, Button, Icon } from 'native-base';
import { connect } from 'react-redux';
import { handleContractionDeletePress } from '../actions';
import ContractionRatingSection from './ContractionRatingSection';

const formatTime = require('minutes-seconds-milliseconds');

class ContractionCard extends Component {
  handleDeletePress() {
    console.log(handleContractionDeletePress);
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
          <Text>Contraction #{this.props.index + 1}</Text>
          <Text>Time: {formatTime(this.props.time)}</Text>
          <Button transparent danger onPress={this.handleDeletePress.bind(this)}>
            <Icon name="ios-close-circle-outline" />
          </Button>
        </CardItem>
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
  const { contractions } = timer;

  return { contractions };
};

export default connect(mapStateToProps, {
  handleContractionDeletePress
})(ContractionCard);
