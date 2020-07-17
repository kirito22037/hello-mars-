import React from 'react';
import GridLayout from './components/GridLayout';
import ControlPanel from './components/controlPanel';
//import AlgoPanel from './components/AlgoPanel';
import GridProvider from './GridContext';

function App() {
  return (
    <GridProvider>
    <div className="app">
      <GridLayout />
      <ControlPanel/>
    </div>
    </GridProvider>
  );
}

export default App;
