import React, { Component } from 'react';
import {
  Content,
  Text,
  View,
  Button,
  Icon,
  SwipeRow,
  Container,
  Header
}
from 'native-base';
import { connect } from 'react-redux';
import { handleContractionDeletePress, handleContractionNoteUpdate } from '../actions';
import ContractionNote from './ContractionNote';

const formatTime = require('minutes-seconds-milliseconds');

class ContractionRow extends Component {
  onDeletePress() {
    const { contractions, contraction } = this.props;
    this.props.handleContractionDeletePress(contractions, contraction.id);
  }

  onTextInput(text) {
    const contractionID = this.props.contractions.length;
    this.props.handleContractionNoteUpdate(this.props.contractions, contractionID, text);
  }

  render() {
    return (
      <Container>
        <Header />
        <Content scrollEnabled={false}>
          <SwipeRow
                leftOpenValue={75}
                rightOpenValue={-75}
                left={
                  <Button success onPress={() => alert('Add')}>
                    <Icon active name="add" />
                  </Button>
                }
                body={
                  <View>
                    <Text>Contraction {this.props.contraction.id}</Text>
                    <ContractionNote />
                  </View>
                }
                right={
                  <Button danger onPress={this.onDeletePress.bind(this)}>
                    <Icon active name="trash" />
                  </Button>
                }
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ contractionListManager }) => {
  const { contractions } = contractionListManager;
  return { contractions };
};

export default connect(mapStateToProps, {
  handleContractionDeletePress,
  handleContractionNoteUpdate
})(ContractionRow);
