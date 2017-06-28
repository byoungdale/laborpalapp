import React, { Component } from 'react';
import { Container, Content, Input } from 'native-base';

class ContractionNote extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Input placeholder='e.g. contractions are getting closer together!' />
        </Content>
      </Container>
    );
  }
}

export default ContractionNote;
