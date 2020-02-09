import React, { useState } from "react";
import styled from "styled-components"


const Header = styled.header` 
  background-color: #fff;
  width: 100%;
  height: 75px;
  border-bottom: 1px solid #dbdbdb;
  margin-bottom: 30px;
  
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`

const Userinfo = styled.div`

`

const Home = styled.div`
 
`

const Wallet = styled.div`
  display:flex;
  flex-direction: column;
`

const User = styled.div`
  display:flex;
  flex-direction: column;
`

export default function Navigation({ userid, username, balance }) {
  return (
    <Header>
      <Nav>
        <Home>
        <svg viewBox="-34 0 512 512" width="35px" xmlns="http://www.w3.org/2000/svg"><path d="m221.703125 0-221.703125 128v256l221.703125 128 221.703125-128v-256zm0 0" fill="#96a0f0" /><path d="m374.6875 168.15625v176.660156l-152.984375 88.320313-152.984375-88.320313v-176.660156l152.984375-88.320312zm0 0" fill="#39689f" /><g fill="#75e1f7"><path d="m221.703125 0v79.832031l152.988281 88.328125 68.714844-40.160156zm0 0" /><path d="m443.40625 384-68.714844-39.1875-152.988281 88.328125v78.859375zm0 0" /><path d="m0 128 68.714844 40.160156v176.652344l-68.714844 39.1875zm0 0" /></g><path d="m374.6875 168.15625v176.660156l-152.984375 88.320313v-353.300781zm0 0" fill="#224370" /></svg>
        Uncut Gems
        </Home>
        <Userinfo>
          <Wallet>
            <img src="https://raw.githubusercontent.com/JKaram/react-components/master/src/images/wallet.png" alt="wallet" height="24px" width="24px"></img>
            {balance}
          </Wallet>
          <User>

          </User>
        </Userinfo>
      </Nav>
    </Header>
  );

}
