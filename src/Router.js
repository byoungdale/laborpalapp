import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import ContractionStopWatch from './ContractionStopWatch';
import ContractionNote from './components/ContractionNote';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 60 }}>
      <Scene
        key="stopwatch"
        component={ContractionStopWatch}
        title="Contraction StopWatch"
        initial
      />
      <Scene key="note" component={ContractionNote} title="Leave Note" />
    </Router>
  );
};

export default RouterComponent;
