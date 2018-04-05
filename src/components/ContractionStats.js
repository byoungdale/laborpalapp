import React, { Component } from 'react';
import { Image } from 'react-native';
import { View, Text, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux';
const formatTime = require('minutes-seconds-milliseconds');

class ContractionStats extends Component {
  render() {
    const {
      averagecontraction,
      averagefrequency,
      latestcontraction,
      lastestfrequency
    } = this.props.frequency_length_boolean;

    return (
      <View>
        <Grid>
          <Col style={{alignItems: 'center'}}>
            <Row><Text style={styles.columnText}>Lastest duration</Text></Row>
            <Row>
              <Icon
                name={lastestfrequency ? "arrow-up" : "arrow-down"}
                style={lastestfrequency? styles.upGreenArrow : styles.downRedArrow}
              />
            </Row>
            <Row><Text>{formatTime(this.props.frequency_length_values.latestcontraction)}</Text></Row>
          </Col>
          <Col style={{alignItems: 'center'}}>
            <Row><Text style={styles.columnText}>Latest frequency</Text></Row>
            <Row>
              <Icon
                name={latestcontraction ? "arrow-up" : "arrow-down"}
                style={latestcontraction ? styles.upGreenArrow : styles.downRedArrow}
              />
            </Row>
            <Row><Text>{formatTime(this.props.frequency_length_values.lastestfrequency)}</Text></Row>
          </Col>
          <Col style={{alignItems: 'center'}}>
            <Row><Text style={styles.columnText}>Avgerage duration</Text></Row>
            <Row>
              <Icon
                name={averagecontraction ? "arrow-up" : "arrow-down"}
                style={averagecontraction ? styles.upGreenArrow : styles.downRedArrow}
              />
            </Row>
            <Row><Text>{formatTime(this.props.frequency_length_values.averagecontraction)}</Text></Row>
          </Col>
          <Col style={{alignItems: 'center'}}>
            <Row><Text style={styles.columnText}>Average frequency</Text></Row>
            <Row>
              <Icon
                name={averagefrequency ? "arrow-up" : "arrow-down"}
                style={averagefrequency ? styles.upGreenArrow : styles.downRedArrow}
              />
            </Row>
            <Row><Text>{formatTime(this.props.frequency_length_values.averagefrequency)}</Text></Row>
          </Col>
        </Grid>
      </View>
    );
  }
}

const styles = {
  columnText: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  upGreenArrow: {
    color: '#00ff00'
  },
  downRedArrow: {
    color: '#ff0000'
  }
};

const mapStateToProps = ({ frequencyLengthManager }) => {
  const { frequency_length_boolean, frequency_length_values } = frequencyLengthManager;

  return { frequency_length_boolean, frequency_length_values };
};

export default connect(mapStateToProps, {})(ContractionStats);
