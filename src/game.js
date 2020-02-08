import React from "react";
import styled from "styled-components"
import "./game.css"

function showPointsIfActive(pointsProp) {
  if (pointsProp) return pointsProp;
  return null
}

const Article = styled.article` 
  color: #fff;
  width: 600px;
  height: 200px;
  background: linear-gradient(
      to right,
      rgba(${props => props.homeColor}),
      rgba(${props => props.awayColor})  
    ),
   url(${props => props.homeCity ? props.homeCity : ''});
  background-blend-mode: multiply;
  display: flex;
`

const Section = styled.section`
  justify-content: space-between;
  width: 40%;
`
const ScoreLogo = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 2rem;
`
export default function Game({ homeName, awayName, homeLogo, awayLogo, homeCity, gameStatus, homePoints, awayPoints, homeColor, awayColor }) {
  return (
    <Article homeColor={homeColor} awayColor={awayColor} homeCity={homeCity} >
      <Section>
        <h1>{homeName}</h1>
        <ScoreLogo>
          <img src={homeLogo} alt={homeName} height="120px" width="auto" />
          {showPointsIfActive(homePoints)}
        </ScoreLogo>
      </Section>

      <div class="time">
        {gameStatus}
      </div>

      <Section>
        <h1>{awayName}</h1>
        <ScoreLogo>
          {showPointsIfActive(awayPoints)}
          <img src={awayLogo} alt={awayName} height="120px" width="auto" />
        </ScoreLogo>
      </Section>
    </Article>
  );

}

