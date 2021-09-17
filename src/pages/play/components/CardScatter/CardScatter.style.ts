import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Container = styled.div`
  background-color: #e2e2e2;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  h1 {
    text-align: center;
    padding: 20px 0px;
  }
`;

export const Card = styled.div`
  position: absolute;
  width: 200px;
  height: 110px;
  color: rgba(255, 255, 255, 0.5);
  box-shadow: 5px 5px 12px rgb(0 0 0 / 30%);
  border-radius: 10px;
  text-align: right;
  padding: 15px;
`;

export const CardsWrap = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  /* ${Card} {
    &:nth-of-type(1) {
      background: linear-gradient(20deg, black 0%, #fc00ff 100%);
    }
    &:nth-of-type(2) {
      background: linear-gradient(40deg, #fd1d1d, #833ab4);
    }
    &:nth-of-type(3) {
      background: linear-gradient(160deg, #0093e9, #80d0c7);
    }
    &:nth-of-type(4) {
      background: linear-gradient(20deg, #ff5e7e, #ff99ac);
    }
    &:nth-of-type(5) {
      background: linear-gradient(62deg, #fbab7e, #f7ce68);
    }
  } */
`;

export const BottomWrap = styled.div`
  position: absolute;
  top: 90vh;
  width: 100%;
  text-align: center;

  button {
    /* position: absolute; */
    width: 70px;
    height: 30px;
    margin: 0 10px;
    background-color: black;
    color: white;

    &:hover {
      background-color: white;
      border: 1px solid black;
      color: black;
    }
  }
`;
