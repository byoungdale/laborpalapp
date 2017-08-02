import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Timeline from 'react-native-timeline-listview';

class ContractionTimeLine extends Component {
  onEventPress(data) {
    console.log('ContractionTimeLine: onEventPress: data');
    console.log(data);
    const contractionID = data.title;
    const contractions = this.props.contractions;
    console.log('ContractionTimeLine: onEventPress: contractions');
    const contraction = contractions.find((item) => {
      return item.id === contractionID ? item : null;
    });
    console.log('ContractionTimeLine: onEventPress: contraction');
    console.log(contraction);
    Actions.note({ contraction });
  }

  renderSelected() {
    console.log('renderSelected was run');
    if (this.props.selected) {
      return <Text style={{ marginTop: 10 }}>Selected event: {this.state.selected.title} at {this.state.selected.time}</Text>;
    }
  }

  renderDetail(rowData, sectionID, rowID) {
    const title = <Text style={[styles.title]}>Contraction {rowData.title}</Text>;
    let desc = null;
    if (rowData.description) {
      desc = (
        <View style={styles.descriptionContainer}>
          <Image source={{ uri: rowData.imageUrl }} style={styles.image} />
          <Text style={[styles.textDescription]}>{rowData.description}</Text>
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        {title}
        {desc}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderSelected.bind(this)}
        <Timeline
          style={styles.list}
          data={this.props.timelinedata}
          circleSize={20}
          circleColor='rgba(0,0,0,0)'
          lineColor='rgb(45,156,219)'
          timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
          timeStyle={{
            textAlign: 'center',
            backgroundColor: '#ff9797',
            color: 'white',
            padding: 5,
            borderRadius: 13
          }}
          descriptionStyle={{ color: 'gray' }}
          options={{
            style: { paddingTop: 5 }
          }}
          innerCircle={'icon'}
          onEventPress={this.onEventPress.bind(this)}
          renderDetail={this.renderDetail.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 65,
    backgroundColor: 'white'
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  descriptionContainer: {
    flexDirection: 'row',
    paddingRight: 50
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  textDescription: {
    marginLeft: 10,
    color: 'gray'
  }
});

const mapStateToProps = ({ contractionListManager }) => {
  const { timelinedata, contractions } = contractionListManager;
  console.log('ContractionTimeLine: contractionListManager: timelinedata');
  console.log(timelinedata);
  return { timelinedata, contractions };
};

export default connect(mapStateToProps)(ContractionTimeLine);
