import React, { Component } from 'react';
import {
  Container,
  Content
} from 'native-base';
import ContractionCard from './components/ContractionCard';

class NoteSection extends Component {
  render() {
    console.log('NoteSection: this.props.contraction');
    console.log(this.props.contraction);
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
