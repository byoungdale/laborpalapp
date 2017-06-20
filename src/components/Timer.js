import { Container, Card, CardItem, View, Text, Header, Title, Content, Button, Icon, Body } from 'native-base';

const timerDisplay = () => {
  return(
    <View style={[styles.timerWrapper]}>
      <Text style={styles.timer}>
        {formatTime(this.state.timeElapsed)}
      </Text>
    </View>
  )
}

const startStopButton = () => {
  let style = this.state.running ? styles.stopButton : styles.startButton
  return(
    <TouchableHighlight
      underlayColor="gray"
      onPress={this.handleStartPress}
      style={[styles.button, style]}>
      <Text>
        {this.state.running ? 'Stop' : 'Start'}
      </Text>
    </TouchableHighlight>
  )
}

const handleStartPress = () => {
  if (this.state.running) {
    clearInterval(this.interval);
    this.setState({ running: false });
    return;
  }

  this.setState({ startTime: new Date() });

  this.interval = setInterval(() => {
    this.setState({
      timeElapsed: new Date() - this.state.startTime,
      running: true
    });
  }, 30);
};
