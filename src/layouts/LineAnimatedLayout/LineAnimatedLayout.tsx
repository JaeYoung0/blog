import React from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

interface Props {
  children: React.ReactNode;
}

function LineAnimatedLayout({ children }: Props) {
  return (
    <Container>
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
}

const showLine = keyframes`
    from{
        width:0%;
    }
    to{
        width:100%;
    }
`;

const Container = styled.div`
  background: #000;
  min-height: 100vh;
  overflow-x: hidden;

  nav::after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: "";
    width: 0;
    height: 1px;
    background: #e4e5e7;
    animation: ${showLine} cubic-bezier(0.175, 0.885, 0.32, 1.275) 2s forwards;
  }

  footer::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 1px;
    background: #e4e5e7;

    animation: ${showLine} cubic-bezier(0.175, 0.885, 0.32, 1.275) 2s forwards;
  }
`;

export default LineAnimatedLayout;
