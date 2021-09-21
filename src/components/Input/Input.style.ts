import { MEDIA_QUERY_ARR } from "@styles/MediaQuery";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  & ~ & {
    margin-top: 3rem;
  }

  ${MEDIA_QUERY_ARR("large")} {
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

  ${MEDIA_QUERY_ARR("large")} {
    font-size: 2rem;
  }
`;

export const errorText = styled.p`
  width: 100%;
  text-align: left;
  padding: 1rem 0rem;
  color: blue;
`;
