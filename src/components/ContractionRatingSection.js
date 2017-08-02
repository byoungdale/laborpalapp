import React, { Component } from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Button, Body, Text } from 'native-base';
import { connect } from 'react-redux';
import { handleContractionRatingUpdate } from '../actions/ContractionListActions';
import ratings from '../img/ratings';

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
              <Image
                style={{
                  alignSelf: 'center',
                  height: 35,
                  width: 35,
                }}
                source={ratings.relaxed}
              />
            </Button>
            <Button
              transparent
              onPress={this.onRatingPress.bind(this, 'neutral_face')}
            >
              <Image
                style={{
                  alignSelf: 'center',
                  height: 35,
                  width: 35,
                }}
                source={ratings.neutral_face}
              />
            </Button>
            <Button
              transparent
              onPress={this.onRatingPress.bind(this, 'sweat')}
            >
              <Image
                style={{
                  alignSelf: 'center',
                  height: 35,
                  width: 35,
                }}
                source={ratings.sweat}
              />
            </Button>
            <Button
              transparent
              onPress={this.onRatingPress.bind(this, 'sleepy')}
            >
              <Image
                style={{
                  alignSelf: 'center',
                  height: 35,
                  width: 35,
                }}
                source={ratings.sleepy}
              />
            </Button>
            <Button
              transparent
              onPress={this.onRatingPress.bind(this, 'fearful')}
            >
              <Image
                style={{
                  alignSelf: 'center',
                  height: 35,
                  width: 35,
                }}
                source={ratings.fearful}
              />
            </Button>
            <Button
              transparent
              onPress={this.onRatingPress.bind(this, 'sob')}
            >
              <Image
                style={{
                  alignSelf: 'center',
                  height: 35,
                  width: 35,
                }}
                source={ratings.sob}
              />
            </Button>
            <Button
              transparent
              onPress={this.onRatingPress.bind(this, 'triumph')}
            >
              <Image
                style={{
                  alignSelf: 'center',
                  height: 35,
                  width: 35,
                }}
                source={ratings.triumph}
              />
            </Button>
            <Button
              transparent
              onPress={this.onRatingPress.bind(this, 'baby')}
            >
              <Image
                style={{
                  alignSelf: 'center',
                  height: 35,
                  width: 35,
                }}
                source={ratings.baby}
              />
            </Button>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

const mapStateToProps = ({ contractionListManager }) => {
  const { contractions } = contractionListManager;
  return { contractions };
};

export default connect(mapStateToProps, {
  handleContractionRatingUpdate
})(ContractionRatingSection);
