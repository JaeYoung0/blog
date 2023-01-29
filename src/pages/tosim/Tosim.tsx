import _ from "lodash";
import * as S from "./Tosim.style";
import useCurrentSection from "@hooks/useCurrentSection";
import Navbar from "@components/Navigation";
import { useEffect, useRef } from "react";
import { SECTION_INFO } from "./info.data";

// “Be patient toward all that is unsolved in your heart
// and try to love the questions themselves,
// like locked rooms and like books that are now written in a very foreign tongue.
// Do not now seek the answers, which cannot be given you
// because you would not be able to live them.
// And the point is, to live everything.
// Live the questions now.
// Perhaps you will then gradually, without noticing it,
// live along some distant day into the answer.”
// ― Rainer Maria Rilke

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
  for (let i = 0; i < scrollRange.length - 1; i++) {
    slope =
      (valueRange[i + 1] - valueRange[i]) /
      (scrollRange[i + 1] - scrollRange[i]);
    interceptY = valueRange[i] - slope * scrollRange[i];
    value = slope * currentRatio + interceptY;

    if (currentRatio >= scrollRange[i] && currentRatio <= scrollRange[i + 1]) {
      return Math.round(value * 10) / 10;
    }
  }
};

function Tosim() {
  const { currentSection, currentRatio } = useCurrentSection(
    "main__section",
    3
  );
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const woww = calcEffect("flipVideo", currentRatio, SECTION_INFO[1].effects);

    if (!woww) return;
    const oh = Math.round(woww).toString().padStart(2, "0");

    const myImg = new Image();
    myImg.src = `/frames_demo2/frame_${oh}_delay-0.2s.jpg`;
    myImg.alt = "fallback";
    myImg.width = canvas.width;
    myImg.height = canvas.height;
    console.log("@@myImg", myImg);
    myImg.addEventListener("load", () => {
      ctx.drawImage(myImg, 0, 0, myImg.width, myImg.height);
    });
  }, [canvasRef, currentRatio]);

  return (
    <>
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
                <h1>{section.eng}</h1>
                {section.image && <img src={section.image} />}
                {idx === 1 && (
                  <canvas ref={canvasRef} width={600} height={500}></canvas>
                )}
              </S.Section>
            );
          })}
        </S.SectionContainer>

        <S.Footer>
          <span>Footer</span>
        </S.Footer>
      </S.HomePageContainer>
    </>
  );
}

export default Tosim;
