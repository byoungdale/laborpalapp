import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Input, Item, Card, CardItem, Text, Button } from 'native-base';

class ContractionNote extends Component {

  render() {
    return (
      <Card>
        <CardItem header><Text>Leave a note</Text></CardItem>
        <CardItem>
          <Item rounded>
            <Input
              placeholder='e.g. contractions are getting closer together!'
              onChangeText={(input) => { console.log(input); }}
            />
          </Item>
        </CardItem>
        <CardItem>
          <Button
            transparent
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0
            }}
          >
            <Text>Save</Text>
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
})(ContractionNote);
