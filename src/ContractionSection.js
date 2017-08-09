import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  Container,
  Content
} from 'native-base';
import ContractionCard from './components/ContractionCard';
import { handleContractionNoteUpdate } from './actions/ContractionListActions';

class ContractionSection extends Component {
  render() {
    const result = this.props.contractions.find((element) => {
        return element.id === this.props.contraction.id ? element : null;
    });
    return (
      <Container>
        <Content>
          <ContractionCard contraction={result} />
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
  handleContractionNoteUpdate
})(ContractionSection);
