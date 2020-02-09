import React from "react";
import styled from "styled-components"
import "./gameStats.css"




export default function GameStats({}) {
  return (
    <article >
      <button>Pick'em</button>
      <button>Total Points</button>
      <h1>Team Stats</h1>

      <section>
        <button>Rebounds</button>
        <button>3 Pointers</button>
        <button>Steals</button>
        <button>Blocks</button>
        <button>Feild Goals</button>
      </section>
    </article>

  );

}