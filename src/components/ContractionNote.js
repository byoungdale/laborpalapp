import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Input, Item, Card, CardItem, Text } from 'native-base';
import { handleContractionNoteUpdate } from '../actions/ContractionListActions';

class ContractionNote extends Component {
  onTextInput(text) {
    const contractionID = this.props.contractions.length;
    this.props.handleContractionNoteUpdate(this.props.contractions, contractionID, text);
  }

  render() {
    return (
      <Card>
        <CardItem header><Text>Leave a note</Text></CardItem>
        <CardItem>
          <Item rounded>
            <Input
              placeholder='e.g. contractions are getting closer together!'
              onChangeText={this.onTextInput.bind(this)}
              value={this.props.note}
            />
          </Item>
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
  handleContractionNoteUpdate
})(ContractionNote);
