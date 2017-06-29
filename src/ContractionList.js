import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  View,
  Content
} from 'native-base';
import ContractionCard from './components/ContractionCard';
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
      <View>
       {this.listContractions()}
      </View>
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
