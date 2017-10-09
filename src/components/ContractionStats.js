import React, { Component } from 'react';
import { Image } from 'react-native';
import { View, H3, Container, Content, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux';
const formatTime = require('minutes-seconds-milliseconds');

class ContractionStats extends Component {
  render() {
    console.log('ContractionStats: this.props.frequency_length_boolean');
    console.log(this.props.frequency_length_boolean);
    return (
      <View>
        <Grid>
          <Col size={1}></Col>
          <Col size={1}><Text>Length</Text></Col>
          <Col size={1}><Text>Frequency</Text></Col>
        </Grid>
        <Grid>
          <Row size={1}><Text>Latest</Text></Row>
          <Row size={1}><Text>Average</Text></Row>
        </Grid>
      </View>
    );
  }
}

const mapStateToProps = ({ frequencyLengthManager }) => {
  const { frequency_length_boolean } = frequencyLengthManager;

  return { frequency_length_boolean };
};

export default connect(mapStateToProps, {})(ContractionStats);
