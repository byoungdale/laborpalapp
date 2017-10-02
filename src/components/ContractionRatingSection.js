import React, { Component } from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Button, Body, Text } from 'native-base';
import { connect } from 'react-redux';
import { handleContractionRatingUpdate } from '../actions/ContractionListActions';
import ratings from '../img/ratings';

class ContractionRatingSection extends Component {
  onRatingPress(ratingName) {
    const contractionID = this.props.contraction.id;
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
              style={this.props.contraction.rating === 'relaxed' ? styles.selected : styles.notselected}
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
              style={this.props.contraction.rating === 'neutral_face' ? styles.selected : styles.notselected}
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
              style={this.props.contraction.rating === 'sweat' ? styles.selected : styles.notselected}
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
              style={this.props.contraction.rating === 'sleepy' ? styles.selected : styles.notselected}
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
              style={this.props.contraction.rating === 'fearful' ? styles.selected : styles.notselected}
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
              style={this.props.contraction.rating === 'sob' ? styles.selected : styles.notselected}
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
              style={this.props.contraction.rating === 'triumph' ? styles.selected : styles.notselected}
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
              style={this.props.contraction.rating === 'baby' ? styles.selected : styles.notselected}
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

const styles = {
    selected: {
      backgroundColor: '#f48c42',
      paddingLeft: 3.5,
      width: 100,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    notselected: {
      backgroundColor: 'white',
      paddingLeft: 3.5,
      width: 100,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start'
    }
};

const mapStateToProps = ({ contractionListManager }) => {
  const { contractions } = contractionListManager;
  return { contractions };
};

export default connect(mapStateToProps, {
  handleContractionRatingUpdate
})(ContractionRatingSection);
