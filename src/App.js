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
        gameStatus="7:30pm"
        homePoints="20"
        awayPoints="11"
        homeCity="https://raw.githubusercontent.com/JKaram/react-components/master/src/images/toronto-background.png"
        homeColor="195, 14, 47, 0.701"
        awayColor="253, 184, 39, 0.701"
      />





      <GameStats
      />

      <Game
        homeName="Toronto Raptors"
        awayName="Los Angeles Lakers"
        homeLogo="https://content.sportslogos.net/logos/6/213/full/slhg02hbef3j1ov4lsnwyol5o.png"
        awayLogo="https://www.stickpng.com/assets/images/58419d0aa6515b1e0ad75a6c.png"
        gameStatus="7:30pm"
        homePoints="20"
        awayPoints="11"
        homeCity="https://raw.githubusercontent.com/JKaram/react-components/master/src/images/toronto-background.png"
        homeColor="195, 14, 47, 0.701"
        awayColor="253, 184, 39, 0.701"
      />

      
      <Checkout
      />

    </div>
  );
}

export default App;
