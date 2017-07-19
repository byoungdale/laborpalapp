import React, { Component } from 'react';
import { Card, CardItem, Button, Body, Text } from 'native-base';
import { connect } from 'react-redux';
import { handleContractionRatingUpdate } from '../actions/ContractionListActions';

const Emoji = require('react-native-emoji').default;

class ContractionRatingSection extends Component {
  onRatingPress(ratingName) {
    const contractionID = this.props.contractions.length;
    this.props.handleContractionRatingUpdate(this.props.contractions, contractionID, ratingName);
  }

  render() {
    return (
      <Card>
        <CardItem header>
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
            <Button
              transparent
              onPress={this.onRatingPress.bind(this, 'relaxed')}
            >
              <Emoji name="relaxed" />
            </Button>
            <Button transparent>
              <Emoji name="neutral_face" />
            </Button>
            <Button transparent>
              <Emoji name="sweat" />
            </Button>
            <Button transparent>
              <Emoji name="sleepy" />
            </Button>
            <Button transparent>
              <Emoji name="fearful" />
            </Button>
            <Button transparent>
              <Emoji name="sob" />
            </Button>
            <Button transparent>
              <Emoji name="triumph" />
            </Button>
            <Button transparent>
              <Emoji name="baby" />
            </Button>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

const mapStateToProps = ({ contractionListManager }) => {
  console.log('ContractionRating: mapStateToProps: contractions');
  const { contractions } = contractionListManager;
  console.log(contractions);
  return { contractions };
};

export default connect(mapStateToProps, {
  handleContractionRatingUpdate
})(ContractionRatingSection);
