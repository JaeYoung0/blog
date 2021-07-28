import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useCurrentSection from "@hooks/useCurrentSection";

import { css } from "@emotion/react";
import _ from "lodash";

const SectionBox = styled.section`
  width: 100vw;
  height: 100vh;
  transition: background 1s ease;
`;

const arr = [
  {
    color: "#FF6F91",
  },
  {
    color: "#FF9671",
  },
  {
    color: "#FFC75F",
  },
  {
    color: "#00B063",
  },
];

function Paging() {
  const classNameOfSections = "main__section";
  const lengthOfSections = arr.length;
  const {
    currentSection,
    currentRatio,
    handlePlusClick,
    handleMinusClick,
  } = useCurrentSection(classNameOfSections, lengthOfSections);

  console.log("@@@@currentSection", currentSection, currentRatio);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 100,
          background: "white",
          width: "50%",
          height: "50px",
          transform: "translateX(50%)",
        }}
      >
        <h1>{currentSection + 1}페이지 입니다</h1>
        <button onClick={handleMinusClick}>이전</button>
        <button onClick={handlePlusClick}>다음</button>
      </div>
      {arr.map((item, idx) => (
        <SectionBox
          key={idx}
          className={`${classNameOfSections} section__${idx} `}
          style={{ background: `${item.color}` }}
        />
      ))}
    </>
  );
}

export default Paging;
