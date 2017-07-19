import React, { Component } from 'react';
import {
  Container,
  Content
} from 'native-base';
import ContractionCard from './components/ContractionCard';

class NoteSection extends Component {
  render() {
    return (
      <Container>
        <Content>
          <ContractionCard contraction={this.props.contraction} />
        </Content>
      </Container>
    );
  }
}

export default NoteSection;
