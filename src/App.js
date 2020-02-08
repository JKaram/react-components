import React from 'react';
import './App.css';
import Game from './game'

function App() {
  return (
    <div className="App">
      <Game
      homeName = "Toronto Raptors"
      awayName = "Los Angeles Lakers"
      homeLogo = "https://www.stickpng.com/assets/images/58419bf3a6515b1e0ad75a59.png"
      awayLogo = "https://www.stickpng.com/assets/images/58419d0aa6515b1e0ad75a6c.png"
      gameStatus = "7:30pm"
      homePoints = "20"
      awayPoints = "11"
      homeCity = "" 
      homeColor = ""
      awayColor = ""
      />
    </div>
  );
}

export default App;
