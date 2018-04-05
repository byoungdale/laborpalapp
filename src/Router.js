import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { connect } from 'react-redux';
import ContractionSection from './ContractionSection';
import MainView from './MainView';
import SubscribeSection from './SubscribeSection';

class RouterComponent extends Component {
  render() {
    console.log('RouterComponent');
    console.log(this.props);
    const { status } = this.props.subscriber;
    console.log('status');
    console.log(status);
    if (status === 'decline' || status === true) {
      return (
        <Router sceneStyle={{ paddingTop: 60 }}>
          <Scene
            key="stopwatch"
            component={MainView}
            title="LaborPal"
            renderBackButton={() => (null)}
            initial
          />
          <Scene
            key="note"
            component={ContractionSection}
            title="LaborPal Notepad"
            renderBackButton={() => (null)}
          />
        </Router>
      );
    } else {
      return (
        <Router sceneStyle={{ paddingTop: 60 }}>
          <Scene
            key="subscribe"
            component={SubscribeSection}
            title=""
            renderBackButton={() => (null)}
            initial
          />
          <Scene
            key="stopwatch"
            component={MainView}
            title="LaborPal"
            renderBackButton={() => (null)}
          />
          <Scene
            key="note"
            component={ContractionSection}
            title="Contraction Notepad"
            renderBackButton={() => (null)}
          />
        </Router>
      );    
    }
  }
}

const mapStateToProps = ({ subscriberManager }) => {
  console.log(subscriberManager);
  const { subscriber } = subscriberManager;
  return { subscriber };
};

export default connect(mapStateToProps, {})(RouterComponent);
