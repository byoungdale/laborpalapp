import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import NoteSection from './NoteSection';
import TimerSection from './TimerSection';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 60 }}>
      <Scene
        key="stopwatch"
        component={TimerSection}
        title="StopWatch"
        initial
      />
      <Scene
        key="note"
        component={NoteSection}
        title="Note"
      />
    </Router>
  );
};

export default RouterComponent;
