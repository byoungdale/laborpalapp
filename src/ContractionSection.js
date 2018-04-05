import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  Container,
  Content,
  Text,
  Card,
  CardItem,
  Button
}
from 'native-base';
import ContractionCard from './components/ContractionCard';
import {
  handleContractionDeletePress,
  handleContractionSavePress,
  handleContractionNoteUpdate,
  handleFrequencyLengthCalculation
} from './actions';

class ContractionSection extends Component {
  onDeletePress() {
    const { contractions, contraction, timelinedata } = this.props;
    this.props.handleContractionDeletePress(contractions, timelinedata, contraction.id);
  }

  onSavePress() {
    const { contractions, contraction, frequency_length_values } = this.props;
    this.props.handleContractionSavePress(contractions, contraction.id);
    this.props.handleFrequencyLengthCalculation(contractions, frequency_length_values);
  }

  render() {
    const result = this.props.contractions.find((element) => {
        return element.id === this.props.contraction.id ? element : null;
    });

    if (!result) {
      return (
        <Container>
          <Content>
            <Text
              style={{
                flex: 1,
                fontSize: 20,
                textAlign: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              You have no contractions yet.

              Time to get that baby out!
            </Text>
            <Button
              transparent
              onPress={Actions.stopwatch}
            >
              <Text
                style={{
                  flex: 1,
                  fontSize: 20,
                  textAlign: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
              Head back to the timer
            </Text>
            </Button>
          </Content>
        </Container>
      );
    }
    return (
      <Container>
        <Content>
          <ContractionCard contraction={result} />
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
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ contractionListManager, frequencyLengthManager }) => {
  const { contractions, timelinedata } = contractionListManager;
  const { frequency_length_values } = frequencyLengthManager;
  return { contractions, timelinedata, frequency_length_values };
};

export default connect(mapStateToProps, {
  handleContractionNoteUpdate,
  handleContractionDeletePress,
  handleContractionSavePress,
  handleFrequencyLengthCalculation
})(ContractionSection);
