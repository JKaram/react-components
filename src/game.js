import React from "react";
import styled from "styled-components"
import "./game.css"


const Article = styled.article` 
  color: #fff;
  width: 600px;
  height: 200px;
  background: linear-gradient(
      to right,
      rgba(195, 14, 47, 0.701),
      rgba(253, 184, 39, 0.701)  
    ),
   url("./images/toronto-background.png");
  background-blend-mode: multiply;
  display: flex;
`

export default function Game({ homeName, awayName, homeLogo, awayLogo, homeCity, gameStatus, homePoints, awayPoints, homeColor, awayColor }) {

  return (
    <Article>
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
    </Article>
  );

}