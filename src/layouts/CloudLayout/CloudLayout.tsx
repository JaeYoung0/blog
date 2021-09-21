import React from "react";
import styled from "@emotion/styled";
import { MEDIA_QUERY_ARR } from "@styles/MediaQuery";
import { keyframes } from "@emotion/react";

const 흘러라구름아 = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: -1000rem 0;
  }
`;

const Background = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1498496294664-d9372eb521f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)");

  background-repeat: repeat;
  background-size: cover;

  animation: ${흘러라구름아} 500s linear infinite;
`;

const FilterWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  backdrop-filter: blur(10px);
  width: 100vw;
  height: 100vh;
`;

const FormWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  width: 35rem;

  background: #b2b2b2;
  border-radius: 10px;

  opacity: 0.5;

  padding: 5rem;

  text-align: center;

  ${MEDIA_QUERY_ARR("large")} {
    width: 80rem;

    padding: 10rem 20rem;
  }
`;

interface Props {
  children: React.ReactNode;
}

function CloudLayout({ children }: Props) {
  return (
    <Background>
      <FilterWrapper>
        <FormWrapper>{children}</FormWrapper>
      </FilterWrapper>
    </Background>
  );
}

export default CloudLayout;
