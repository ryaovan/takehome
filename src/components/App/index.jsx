import React from 'react';
import './index.css';
import ElementContainer from '../ElementContainer/index';
import FloorPlanContainer from '../FloorPlanContainer/index';

const App = () => {
  return (
    <div className="App">
      <ElementContainer />
      <FloorPlanContainer />
    </div>
  );
};

export default App;
