import React from 'react';
import ListofPlayers from './ListofPlayers';
import IndianPlayersComponent from './IndianPlayers';
import './App.css';

function App() {
  const flag = false;

  if (flag) {
    return (
      <div className="App">
        <ListofPlayers />
      </div>
    );
  } else {
    return (
      <div className="App">
        <IndianPlayersComponent />
      </div>
    );
  }
}

export default App;