import "./game.css"
import React from "react";


export default function Game({homeName, awayName, homeLogo, awayLogo, homeCity, gameStatus, homePoints, awayPoints, homeColor, awayColor}) {

  return (
    <article>
      <section class="home">
        <h1>{homeName}</h1>
        <img src={homeLogo} alt={homeName} height="120px" width="auto" />
      </section>

      <div class="time">
        {gameStatus}
      </div>

      <section class="away">
        <h1>{awayName}</h1>
        <img src={awayLogo} alt={awayName} height="120px" width="auto" />
      </section>


    </article>
  );

}