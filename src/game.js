import React, { useState } from "react";
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
  margin: 30px auto 0;
  background: linear-gradient(
      to right,
      rgba(${props => props.homeColor}),
      rgba(${props => props.awayColor})  
    ),
   url(${props => props.homeCity ? props.homeCity : 'https://previews.123rf.com/images/enterline/enterline1311/enterline131100002/24220420-a-realistic-vector-hardwood-textured-basketball-court-.jpg'});
  background-blend-mode: multiply;
  display: flex;

  &:hover {
    box-shadow: 0 8px 6px -6px black;
    cursor: pointer;
  }

`

const Section = styled.section`
  justify-content: space-between;
  width: 40%;
  text-align: center;
`
const ScoreLogo = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 2rem;
`
const GameInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 20%;
  font-weight: bold;
`


export default function Game({ homeName, awayName, homeLogo, awayLogo, homeCity, gameStatus, homePoints, awayPoints, homeColor, awayColor }) {
  return (
    <Article homeColor={homeColor} awayColor={awayColor} homeCity={homeCity} >
      <Section>
        <h1>{homeName}</h1>
        <ScoreLogo>
          <img src={homeLogo} alt={homeName} height="100px" width="auto" />
          {showPointsIfActive(homePoints)}
        </ScoreLogo>
      </Section>

      <GameInfo>
      
      <h3>@ {gameStatus}</h3>
      {/* <button type="button">Show More</button> */}
      </GameInfo>

      <Section>
        <h1>{awayName}</h1>
        <ScoreLogo>
          {showPointsIfActive(awayPoints)}
          <img src={awayLogo} alt={awayName} height="100px" width="auto" />
        </ScoreLogo>
      </Section>
    </Article>
  );

}

