import React, { Component } from 'react';
import {
  Text,
  Card,
  CardItem,
  Button
}
from 'native-base';
import { connect } from 'react-redux';
import { handleContractionDeletePress, handleContractionSavePress } from '../actions';
import ContractionRatingSection from './ContractionRatingSection';
import ContractionNote from './ContractionNote';
import ContractionOverview from './ContractionOverview';

class ContractionCard extends Component {
  onDeletePress() {
    const { contractions, contraction } = this.props;
    this.props.handleContractionDeletePress(contractions, contraction.id);
  }

  onSavePress() {
    const { contractions, contraction } = this.props;
    this.props.handleContractionSavePress(contractions, contraction.id);
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
        </CardItem>
        <ContractionOverview contraction={this.props.contraction} />
        <ContractionRatingSection contraction={this.props.contraction} />
        <ContractionNote contraction={this.props.contraction} />
        <CardItem
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Button
            transparent
            onPress={this.onSavePress.bind(this)}
          >
            <Text>Save</Text>
          </Button>
          <Button
            transparent
            danger
            onPress={this.onDeletePress.bind(this)}
          >
            <Text>Delete</Text>
          </Button>
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
  handleContractionDeletePress,
  handleContractionSavePress
})(ContractionCard);
