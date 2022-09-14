import styled from "@emotion/styled";

export const Container = styled.span`
  position: relative;
  display: inline-block;
`;

export const Link = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  transform: translate3d(0, -50%, 0);

  font-size: 1.2rem;
  font-weight: bold;
  color: #2959ff;

  cursor: pointer;
`;
