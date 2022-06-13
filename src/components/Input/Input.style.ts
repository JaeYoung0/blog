import { SCREEN_BREAKPOINT } from "@styles/mediaQuery";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  & ~ & {
    margin-top: 3rem;
  }

  ${SCREEN_BREAKPOINT("large")} {
    & ~ & {
      margin-top: 5rem;
    }
  }
`;

export const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
  background: transparent;
  border-bottom: 1px solid #ffffff;
  padding: 1rem 0rem;
  font-size: 1.4rem;

  &:focus {
    background: transparent;
  }

  ${SCREEN_BREAKPOINT("large")} {
    font-size: 2rem;
  }
`;

export const errorText = styled.p`
  width: 100%;
  text-align: left;
  padding: 1rem 0rem;
  color: blue;
`;
