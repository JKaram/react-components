import React from 'react';
import './App.css';
import Game from './game'
import GameStats from './gameStats'
import Checkout from './checkout'

import Navigation from './nav';

function App() {
  return (
    <div className="App">
      <Navigation
        username="Jamie"
        userphoto="https://raw.githubusercontent.com/JKaram/react-components/master/src/images/img_98061.png"
        balance="14.56"
      />

      <Game
        homeName="Toronto Raptors"
        awayName="Los Angeles Lakers"
        homeLogo="https://www.stickpng.com/assets/images/58419bf3a6515b1e0ad75a59.png"
        awayLogo="https://www.stickpng.com/assets/images/58419d0aa6515b1e0ad75a6c.png"
        gameStatus="7:30"
        homePoints="20"
        awayPoints="11"
        homeCity="https://raw.githubusercontent.com/JKaram/react-components/master/src/images/toronto-background.png"
        homeColor="195, 14, 47, 0.701"
        awayColor="253, 184, 39, 0.701"
      />

      <Game
        homeName="Brooklyn Nets"
        awayName="Boston Celtics"
        homeLogo="https://raw.githubusercontent.com/JKaram/react-components/master/src/images/58419c7ba6515b1e0ad75a62.png"
        awayLogo="https://raw.githubusercontent.com/JKaram/react-components/master/src/images/58419c6aa6515b1e0ad75a61.png"
        gameStatus="7:30"
        homePoints=""
        awayPoints=""
        homeCity="https://raw.githubusercontent.com/JKaram/react-components/master/src/images/brooklyn.png"
        homeColor="10, 100, 200, 0.701"
        awayColor="1,131,72, 0.701"
      />

      
      <GameStats />

    </div>
  );
}

export default App;
