import React from 'react';
import Counter from './Components/Counter';
import Welcome from './Components/Welcome';
import CurrencyConverter from './Components/CurrencyConverter';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Event Handling Examples</h1>
      <Counter />
      <Welcome />
      <CurrencyConverter />
    </div>
  );
}

export default App;
