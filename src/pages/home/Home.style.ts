import styled from "@emotion/styled";
import { css } from "@emotion/react";

const backgroundClip = css`
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const Banner = styled.div`
  background-image: url("https://images.unsplash.com/photo-1498496294664-d9372eb521f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)");
  background-position: top;
  ${backgroundClip}

  width: 100%;
  text-align: center;

  h1 {
    font-size: max(6rem, 5vw);
  }
  h2 {
    font-size: max(6rem, 4vw);
    line-height: 1.3;
  }
  h1 + h2 {
    margin-top: 2rem;
  }
`;

export const Wrapper = styled.div`
  padding: 6rem 2rem;
  margin: 0 auto;
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 2rem;
  color: skyblue;
  border: 1px solid skyblue;
  background-color: transparent;
  & + & {
    margin-left: 2rem;
  }
`;

export const Menu = styled.div`
  text-align: center;
`;
