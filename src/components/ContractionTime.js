import { Container, Card, CardItem, View, Text, Header, Title, Content, Button, Icon, Body } from 'native-base';

const lapResetButton = () => {
  return(
    <TouchableHighlight
      onPress={this.handleLapPress}
      style={styles.button}>
      <Text>
        Lap
      </Text>
    </TouchableHighlight>
  )
}

const lapView = () => {
  return(
    <View style={[styles.footer]}>
      {this.laps()}
    </View>
  )
}

const laps = () => {
  return this.state.laps.map((time, index) => (
    <View
      key={index}
      style={styles.lap}
    >
    <Text style={styles.lapText}>
      Lap #{index + 1}
    </Text>
    <Text style={styles.lapText}>
       {formatTime(time)}
    </Text>
  </View>));
  };

const handleLapPress = () => {
  let lap = this.state.timeElapsed
  this.setState({
    startTime: new Date(),
    laps: this.state.laps.concat([lap])
  });
};
