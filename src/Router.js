import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import ContractionSection from './ContractionSection';
import TimerSection from './TimerSection';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 60 }}>
      <Scene
        key="stopwatch"
        component={TimerSection}
        title="LaborPal"
        renderBackButton={() => (null)}
        initial
      />
      <Scene
        key="note"
        component={ContractionSection}
        title="Contraction Notepad"
        renderBackButton={() => (null)}
      />
    </Router>
  );
};

export default RouterComponent;
