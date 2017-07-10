import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Content
} from 'native-base';
import Timeline from 'react-native-timeline-listview';
import ContractionCard from './ContractionCard';
import { handleContractionDeletePress } from './actions/ContractionActions';

class ContractionList extends Component {
  listContractions() {
    return this.props.contractions.reverse().map((contraction, index) => {
      console.log(contraction);
      return (
        <Content key={index}>
          <ContractionCard contraction={contraction} index={index} />
        </Content>
      );
    });
  }

  render() {
    return (
      <Container>
        <Content>
          <Timeline
            data={this.props.contractions}
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ timer }) => {
  const { contractions } = timer;

  return { contractions };
};

export default connect(mapStateToProps, {
  handleContractionDeletePress
})(ContractionList);
