import styled from "@emotion/styled";
import { SCREEN_BREAKPOINT } from "@styles/mediaQuery";

export const Post = styled.article`
  background: #151519;

  padding: 3rem;
  width: 100%;
  border-radius: 10px;

  cursor: pointer;

  ${SCREEN_BREAKPOINT("small")} {
    max-width: 70rem;
  }

  ${SCREEN_BREAKPOINT("large")} {
    max-width: 70rem;
  }

  & ~ & {
    margin-top: 2rem;
  }
`;

export const IconImg = styled.img`
  width: 3rem;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 1.5;

  color: #c9d1d9;
  margin-bottom: 2rem;
`;

export const Subtitle = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  line-height: 1.5;

  color: #c9d1d9;
  margin-bottom: 2rem;
`;

export const Description = styled.p`
  font-size: 1.4rem;
  color: #95a1b2;
  line-height: 1.5;

  margin-bottom: 1rem;

  /* FIXME */
  /* Error: Component selectors can only be used in conjunction with @emotion/babel-plugin.*/
`;

export const ReadMore = styled.p`
  font-size: 1.4rem;
  color: #666666;
`;

export const Outer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 3rem 3rem 0rem;
`;
