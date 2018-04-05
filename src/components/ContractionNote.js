import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Input, Item, Card, CardItem, Text, View } from 'native-base';
import { handleContractionNoteUpdate } from '../actions/ContractionListActions';

class ContractionNote extends Component {
  onTextInput(text) {
    const contractionID = this.props.contraction.id;
    this.props.handleContractionNoteUpdate(this.props.contractions, contractionID, text);
  }

  render() {
    return (
      <Card>
        <CardItem header><Text>Leave a note</Text></CardItem>
        <CardItem>
          <Item>
            <View>
              <Input
                placeholder='e.g. contractions are getting closer together!'
                onChangeText={this.onTextInput.bind(this)}
                value={this.props.contraction.note}
                returnKeyType={ 'done' }
              />
            </View>
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
