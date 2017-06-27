import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  View,
  Content
} from 'native-base';
import ContractionCard from './components/ContractionCard';

class ContractionList extends Component {
  listContractions() {
    return this.props.contractions.map((time, index) => {
      return (
        <Content key={index}>
          <ContractionCard time={time} index={index} />
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

export default connect(mapStateToProps, {})(ContractionList);
