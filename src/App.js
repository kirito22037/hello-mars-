import React from 'react';
import GridLayout from './components/GridLayout';
import ControlPanel from './components/controlPanel';
import GridProvider from './context/GridContext';

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
