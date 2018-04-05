import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  H1, 
  H3, 
  Container, 
  Content,
  Card,
  CardItem,
  Form, 
  Item, 
  Input, 
  Label, 
  Button, 
  Icon, 
  Text, 
  Body,
  Toast
} from 'native-base';
import { handleSubscribeUser, handleFormUpdate, handleDeclineUser } from './actions';

class VideoSection extends Component {
  onMailSubmit() {
    console.log('the submit button was pressed. Here is the state: ');
    console.log(this.props);
    const { form } = this.props;
    console.log('running handleSubscribeUser');
    this.props.handleSubscribeUser(form.email);
  }
  
  onFormUpdate(text) {
    console.log('onFormUpdate');
    this.props.handleFormUpdate(text);
  }
  
  onDeclinePress() {
    console.log('they do not want updates');
    this.props.handleDeclineUser();
  }
  
  render() {
    if (this.props.subscriber.status === 'decline') {
      console.log('status is decline!');
      return (
        <Content>
          <Text>
            SUBSCRIBER STATUS IS DECLINE.
          </Text>
        </Content>
      );
    } else if (this.props.subscriber.status === false) {
      console.log('status is false!');
      return (
        <Container>
          <Content>
          <Body
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 50, 
              marginBottom: 50
            }}
          >
            <Card>
              <CardItem>
                <Icon active name="alert" />
                <Text style={{ color: 'red' }}>There was a problem subscribing your email. Please try again.</Text>
              </CardItem>
            </Card>
            <H1>
              Sign up to get updates
            </H1>
            <Text>
              We will only reach out when it is really good
            </Text>
          </Body>
            <Form>
              <Item stackedLabel>
                <Label>Email</Label>
                  <Input
                    onChangeText={this.onFormUpdate.bind(this)} 
                    value={this.props.form.email}
                  />
              </Item>
            </Form>
            <Body
              style={{
                flex: 2,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Button
                iconLeft
                rounded
                success
                style={{ marginTop: 15, marginBottom: 1 }}
                onPress={this.onMailSubmit.bind(this)}
              >
                <Text>Submit</Text>
              </Button>
              <Button 
                transparent 
                danger
                style={{ margin: 20, marginTop: 0 }}
                onPress={this.onDeclinePress.bind(this)}
              >
                <Text>Skip</Text>
              </Button>
          </Body>
          </Content>
        </Container>
      );
    } else if (this.props.subscriber.status === true) {
      console.log('status is true!');
      return (
        <Content>
          <Text>
            SUBSCRIBER STATUS IS TRUE.
          </Text>
        </Content>
      );
    } else {
      // turn the email subscribe form into a component
      return (
        <Container>
          <Content>
          <Body
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 50, 
              marginBottom: 50
            }}
          >
            <H1>
              Sign up to get updates
            </H1>
            <Text>
              We will only reach out when it is really good
            </Text>
          </Body>
            <Form>
              <Item stackedLabel>
                <Label>Email</Label>
                  <Input
                    onChangeText={this.onFormUpdate.bind(this)} 
                    value={this.props.form.email}
                  />
              </Item>
            </Form>
            <Body
              style={{
                flex: 2,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Button
                iconLeft
                rounded
                success
                style={{ marginTop: 15, marginBottom: 1 }}
                onPress={this.onMailSubmit.bind(this)}
              >
                <Text>Submit</Text>
              </Button>
              <Button 
                transparent 
                danger
                style={{ margin: 20, marginTop: 0 }}
                onPress={this.onDeclinePress.bind(this)}
              >
                <Text>Skip</Text>
              </Button>
          </Body>
          </Content>
        </Container>
      );
    }
  } // render()
} // VideoSection

const mapStateToProps = ({ subscriberManager }) => {
  console.log('mapStateToProps: subscriber and form');
  const { subscriber, form } = subscriberManager;
  console.log(subscriber);
  console.log(form);
  return { subscriber, form };
};

export default connect(mapStateToProps, { 
  handleSubscribeUser, 
  handleFormUpdate,
  handleDeclineUser
})(VideoSection);
