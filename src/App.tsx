import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Dashboard } from './features';

function App() {
  return (
    <div className="App">
      <Dashboard/>
    </div>
  );
}

export default App;
