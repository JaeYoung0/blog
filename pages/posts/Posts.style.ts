import styled from "@emotion/styled";
import { MEDIA_QUERY_ARR } from "@styles/MediaQuery";

export const PostThumbnail = styled.article`
  background: #151519;
  padding: 3rem;
  width: 100%;
  max-width: 37.5rem;
  border-radius: 16px;

  cursor: pointer;

  ${MEDIA_QUERY_ARR("small")} {
    max-width: 50rem;
  }

  ${MEDIA_QUERY_ARR("large")} {
    max-width: 70rem;
  }

  & ~ & {
    margin-top: 2rem;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: #c9d1d9;
  margin-bottom: 2rem;
`;

export const Description = styled.p`
  font-size: 1.6rem;
  color: #95a1b2;

  /* FIXME */
  /* Error: Component selectors can only be used in conjunction with @emotion/babel-plugin.*/
`;

export const Outer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0rem 3rem;
`;
