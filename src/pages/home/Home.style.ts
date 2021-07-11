import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Navigation = styled.nav<{ hideNavbar: boolean }>`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 45px;

  padding: 30px;

  background-color: #99b5d2;

  a {
    font-size: 15px;
    margin: 0 10px;
    color: black;

    &:nth-of-type(1) {
      margin-right: auto;
    }
  }

  ${({ hideNavbar }) =>
    hideNavbar &&
    css`
      transform: translateY(-100%);
      transition: 0.5s ease-in-out;
    `}

  ${({ hideNavbar }) =>
    !hideNavbar &&
    css`
      transform: translateY(0%);
      transition: 0.5s ease-in-out;
    `}
`;

export const SectionContainer = styled.div`
  width: 100%;
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    border: 1px solid red;
    padding-bottom: 100vh;
  }
  h1 {
    /* position: fixed;
    text-align: center;
    left: 0;
    top: 100px;
    width: 100%; */
  }
`;
