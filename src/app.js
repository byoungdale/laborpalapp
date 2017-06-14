import React, { Component } from 'react';
import { Container, Card, CardItem, View, Text, Header, Title, Content, Button, Icon, Body } from 'native-base';

class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
              <Title>StopWatch</Title>
          </Body>
        </Header>
        <Content>
          <View style={{
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Body>
              <Text style={{ fontSize: 50 }}>00:00:00</Text>
            </Body>
          </View>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Button iconLeft style={{ margin: 30 }}>
              <Icon name='ios-play' />
              <Text>Start</Text>
            </Button>
            <Button iconLeft style={{ margin: 30 }}>
              <Icon name='ios-pause' />
              <Text>Stop</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default App;
