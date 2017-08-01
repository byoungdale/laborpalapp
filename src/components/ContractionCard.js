import React, { Component } from 'react';
import {
  Text,
  Card,
  CardItem,
  Button,
  Icon,
  List,
  ListItem,
}
from 'native-base';
import { connect } from 'react-redux';
import { handleContractionDeletePress } from '../actions';
import ContractionRatingSection from './ContractionRatingSection';
import ContractionNote from './ContractionNote';
import ContractionOverview from './ContractionOverview';

class ContractionCard extends Component {
  onDeletePress() {
    const { contractions, contraction } = this.props;
    this.props.handleContractionDeletePress(contractions, contraction.id);
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
          <CardItem header><Text>Contraction {this.props.contraction.id}</Text></CardItem>
          <CardItem>
            <Button
              transparent
              danger
              onPress={this.onDeletePress.bind(this)}
            >
              <Icon name="ios-close-circle-outline" />
            </Button>
          </CardItem>
        </CardItem>
        <List>
          <ListItem>
            <ContractionOverview contraction={this.props.contraction} />
          </ListItem>
          <ListItem>
            <ContractionRatingSection />
          </ListItem>
          <ListItem>
            <ContractionNote />
          </ListItem>
        </List>
      </Card>
    );
  }
}

const mapStateToProps = ({ contractionListManager }) => {
  const { contractions } = contractionListManager;
  console.log('mapStateToProps: contractions');
  console.log(contractions);
  return { contractions };
};

export default connect(mapStateToProps, {
  handleContractionDeletePress
})(ContractionCard);
