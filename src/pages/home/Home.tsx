import _ from "lodash";
import * as S from "./Home.style";
import useCurrentSection from "@hooks/useCurrentSection";
import Navbar from "@components/Navbar";
import { useEffect } from "react";

export const SECTION_INFO = [
  {
    title: "0번 섹션",
    vh: 150,
    effects: {
      opacity: {
        scrollRange: [0, 0.3, 0.7, 1],
        valueRange: [0, 1, 1, 0],
      },
      translateY: {
        scrollRange: [0, 0.3, 0.7, 1],
        valueRange: [10, 0, 0, -10],
      },
    },
  },

  {
    title: "1번 섹션",
    vh: 140,
    // effects: {},
  },
  {
    title: "2번 섹션",
    vh: 200,
    // effects: {},
  },
  {
    title: "3번 섹션",
    vh: 210,
    // effects: {},
  },
];

type EffectName = "opacity";

export const calcEffect = (
  name: string,
  currentRatio: number,
  effects?: any
) => {
  if (!effects) return;
  const { valueRange, scrollRange } = effects[name];

  let slope;
  let interceptY;
  let value;
  // _.throttle(()=>{
  for (let i = 0; i < scrollRange.length - 1; i++) {
    slope =
      (valueRange[i + 1] - valueRange[i]) /
      (scrollRange[i + 1] - scrollRange[i]);

    interceptY = valueRange[i] - slope * scrollRange[i];

    value = slope * currentRatio + interceptY;

    console.log("@@ slope, value", slope, value);

    if (currentRatio >= scrollRange[i] && currentRatio <= scrollRange[i + 1]) {
      return Math.round(value * 10) / 10;
    }
  }
};

export default function HomePage() {
  const { currentSection, currentRatio } = useCurrentSection();

  console.log("@@section num, ratio", currentSection, currentRatio);

  return (
    <S.HomePageContainer>
      <Navbar />
      <S.SectionContainer currentSection={currentSection}>
        {SECTION_INFO.map((section, idx) => {
          return (
            <S.Section
              height={section.vh}
              currentRatio={currentRatio}
              currentSection={currentSection}
              show={idx === currentSection}
              key={idx}
              className="main__section"
            >
              <h1>{section.title}</h1>
            </S.Section>
          );
        })}
      </S.SectionContainer>

      <S.Footer>
        <span>Footer</span>
      </S.Footer>
    </S.HomePageContainer>
  );
}
