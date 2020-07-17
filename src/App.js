import React from 'react';
import GridLayout from './components/GridLayout';
import ControlPanel from './components/controlPanel';
//import AlgoPanel from './components/AlgoPanel';

function App() {
  return (
    <div className="app">
      <GridLayout />
      <ControlPanel/>
    </div>
  );
}

export default App;
